"""
DocNav LangGraph ReAct Agent

The LLM autonomously navigates the document tree by deciding which MCP tools
to call and in what order, rather than following a hardcoded pipeline.
"""

import os
from typing import Annotated, Any, TypedDict

from langchain_core.messages import AnyMessage, SystemMessage, ToolMessage
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_openai import ChatOpenAI
from langgraph.graph import END, StateGraph
from langgraph.graph.message import add_messages

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

DEFAULT_MODEL = os.environ.get("DOCNAV_MODEL", "gpt-4o")
TREENAV_MCP_URL = os.environ.get("TREENAV_MCP_URL", "http://treenav-service:3100")

SYSTEM_PROMPT = """You are DocNav, an intelligent document navigation assistant.
You help users find information in documentation by navigating a live document tree.

You have access to these tools — use them to find precise answers:
- list_documents: See all available documents (use this first if unsure what exists)
- search_documents: Full-text keyword search across all documents (fastest for specific terms)
- get_tree: Get a document's table of contents with section headings and node IDs
- get_node_content: Fetch one or more specific sections by node ID (efficient, targeted)
- navigate_tree: Fetch a section and ALL its sub-sections (use for broad topics)
- find_symbol: Look up code symbols (functions, classes, types) by name

Navigation strategy:
1. For specific questions: use search_documents to locate relevant sections directly.
2. For structural/overview questions: use list_documents then navigate_tree on the root.
3. For targeted reading: use get_tree to see headings, then get_node_content for specific ones.
4. Prefer search_documents and get_node_content over reading entire documents.

Always cite which document node IDs you used. Be precise — only state what the documents say."""

# ---------------------------------------------------------------------------
# State
# ---------------------------------------------------------------------------


class DocNavState(TypedDict):
    messages: Annotated[list[AnyMessage], add_messages]


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _extract_text(result: Any) -> str:
    """Normalise MCP tool results to plain text.

    langchain-mcp-adapters may return str, list[dict], or a LangChain message
    object. Normalise all to a plain string so lc_<uuid> IDs never appear.
    """
    if isinstance(result, str):
        return result
    if isinstance(result, list):
        parts = []
        for item in result:
            if isinstance(item, dict):
                parts.append(item.get("text", str(item)))
            elif hasattr(item, "text"):
                parts.append(item.text)
            else:
                parts.append(str(item))
        return "\n".join(parts)
    if hasattr(result, "content"):
        return _extract_text(result.content)
    return str(result)


# ---------------------------------------------------------------------------
# MCP & LLM factories
# ---------------------------------------------------------------------------


def get_mcp_client() -> MultiServerMCPClient:
    return MultiServerMCPClient(
        {
            "treenav": {
                "url": TREENAV_MCP_URL + "/mcp",
                "transport": "streamable_http",
            }
        }
    )


def get_llm(model: str | None = None) -> ChatOpenAI:
    return ChatOpenAI(
        model=model or DEFAULT_MODEL,
        api_key=os.environ.get("OPENAI_KEY"),
        max_tokens=4096,
    )


# ---------------------------------------------------------------------------
# Graph Nodes
# ---------------------------------------------------------------------------


async def agent(state: DocNavState) -> DocNavState:
    """Call the LLM with MCP tools bound. The LLM decides what to call."""
    mcp_tools = await get_mcp_client().get_tools()
    llm = get_llm().bind_tools(mcp_tools)

    messages = list(state["messages"])
    # Prepend system prompt if this is the start of the conversation
    if not isinstance(messages[0], SystemMessage):
        messages = [SystemMessage(content=SYSTEM_PROMPT)] + messages

    response = await llm.ainvoke(messages)
    return {"messages": [response]}


async def tools(state: DocNavState) -> DocNavState:
    """Execute tool calls made by the LLM in the last AI message."""
    mcp_tools = await get_mcp_client().get_tools()
    tools_by_name = {t.name: t for t in mcp_tools}

    last_msg = state["messages"][-1]
    results: list[ToolMessage] = []

    for tc in last_msg.tool_calls:
        tool = tools_by_name.get(tc["name"])
        if tool is None:
            content = f"Error: tool '{tc['name']}' not found."
        else:
            raw = await tool.ainvoke(tc["args"])
            content = _extract_text(raw)
        results.append(ToolMessage(content=content, tool_call_id=tc["id"]))

    return {"messages": results}


# ---------------------------------------------------------------------------
# Routing
# ---------------------------------------------------------------------------


def should_continue(state: DocNavState) -> str:
    """Continue to tools if the LLM made tool calls, otherwise finish."""
    last_msg = state["messages"][-1]
    if getattr(last_msg, "tool_calls", None):
        return "tools"
    return END


# ---------------------------------------------------------------------------
# Graph Construction
# ---------------------------------------------------------------------------


def build_graph():
    """Build and compile the DocNav ReAct graph."""
    g = StateGraph(DocNavState)

    g.add_node("agent", agent)
    g.add_node("tools", tools)

    g.set_entry_point("agent")
    g.add_conditional_edges("agent", should_continue, {"tools": "tools", END: END})
    g.add_edge("tools", "agent")

    return g.compile()


# The compiled graph — imported by Aegra
graph = build_graph()
