"""
DocNav LangGraph ReAct Agent

Two-phase pipeline:
  agent ↔ tools (ReAct loop)  →  critique  →  agent ↔ tools (if gaps found)  →  END

- agent:    Calls the LLM with tools bound; the LLM decides which MCP tools to call.
            The system prompt instructs the agent to decompose multi-part questions
            and plan its search strategy before calling tools.
- tools:    Executes the tool calls requested by the LLM.
- critique: Reviews the proposed answer for completeness and either approves it or
            triggers another tool round to fill gaps.  Runs once per user turn.
"""

import os
from typing import Annotated, Any, TypedDict

from langchain_core.messages import AIMessage, AnyMessage, HumanMessage, SystemMessage, ToolMessage
from langchain_mcp_adapters.client import MultiServerMCPClient
from langchain_openai import ChatOpenAI
from langgraph.graph import END, StateGraph
from langgraph.graph.message import add_messages

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

DEFAULT_MODEL = os.environ.get("DOCNAV_MODEL", "gpt-4o")
TREENAV_MCP_URL = os.environ.get("TREENAV_MCP_URL", "http://treenav-service:3100")

# Cap each tool result so accumulated context never exceeds 30K TPM.
# 8000 chars ≈ 2000 tokens; 5 calls = ~10K tokens max for tool results.
MAX_TOOL_RESULT_CHARS = int(os.environ.get("MAX_TOOL_RESULT_CHARS", "8000"))

SYSTEM_PROMPT = """You are DocNav, an intelligent document navigation assistant.
You help users find information in documentation by navigating a live document tree.

You have access to these tools — use them to find precise answers:
- list_documents: See all available documents (use this first if unsure what exists)
- search_documents: Full-text keyword search across all documents (fastest for specific terms)
- get_tree: Get a document's table of contents with section headings and node IDs
- get_node_content: Fetch one or more specific sections by node ID (efficient, targeted)
- navigate_tree: Fetch a section and ALL its sub-sections (use for broad topics)
- find_symbol: Look up code symbols (functions, classes, types) by name

Before calling any tools, silently decompose the question into distinct sub-topics and plan your search:
- Identify each sub-topic (e.g. "BYOP overview", "BYOP options", "comparison table")
- Choose the best tool and keyword for each sub-topic
- Flag terms that need exact matches (vendor names, version numbers, port numbers)
Then execute your plan, fetching each sub-topic in turn.

Navigation strategy:
1. For specific questions: use search_documents — results include full section content and "→ References" showing linked doc IDs; follow references when the question needs broader context.
2. For structural/overview questions: use list_documents then navigate_tree on the root.
3. For targeted reading: use get_tree to see headings, then get_node_content for specific ones.
4. Never synthesise an answer from snippets alone — always read the full section content first.

Always cite which document node IDs you used. Be precise — only state what the documents say.
When documents contain URLs or hyperlinks, reproduce them verbatim — never paraphrase or omit links.

Format your response in Markdown — use headers, bullet points, bold, and fenced code blocks where appropriate."""

CRITIQUE_PROMPT = """You are a silent completeness reviewer. Do NOT output any analysis, reasoning, or explanation text.

Check the proposed answer against the original user question:
- Is every sub-topic addressed with specific detail (not vague summaries)?
- Are all URLs, version numbers, port numbers, and vendor names reproduced verbatim from the docs?
- Are there "→ References" or document links that weren't followed but are relevant?

Two options — choose one, output NOTHING else:
1. Answer is complete → output the complete final answer directly in Markdown (no preamble).
2. Something is missing → call the appropriate tool(s) IMMEDIATELY with no preceding text."""

# ---------------------------------------------------------------------------
# State
# ---------------------------------------------------------------------------


class DocNavState(TypedDict):
    messages: Annotated[list[AnyMessage], add_messages]
    critique_done: bool   # True after critique has run once for this turn


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _extract_text(result: Any) -> str:
    """Normalise MCP tool results to plain text."""
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


def _agent_context(messages: list[AnyMessage]) -> list[AnyMessage]:
    """Context for the agent node: prior turns compressed to Q+A, current turn in full.

    Prior-turn tool messages are dropped (already summarised in the AI answer).
    The current in-progress turn is kept intact so the agent can continue its
    reasoning loop with its own tool results still visible.
    """
    return _trim_messages(messages)


def _critique_context(messages: list[AnyMessage]) -> list[AnyMessage]:
    """Minimal context for the critique node: prior Q+A pairs + current question + proposed answer.

    Critique doesn't need to see any tool call/result pairs — it only needs to
    know what the user asked and what the agent answered.  Stripping all tool
    messages collapses the input from ~20K tokens to ~2K.
    """
    turns: list[list[AnyMessage]] = []
    current: list[AnyMessage] = []
    for msg in messages:
        if isinstance(msg, HumanMessage) and current:
            turns.append(current)
            current = [msg]
        else:
            current.append(msg)
    if current:
        turns.append(current)

    pruned: list[AnyMessage] = []
    for turn in turns:
        human_msgs = [m for m in turn if isinstance(m, HumanMessage)]
        # The final AI answer is the last AIMessage without tool_calls.
        ai_answers = [
            m for m in turn
            if isinstance(m, AIMessage) and not getattr(m, "tool_calls", None)
        ]
        pruned.extend(human_msgs)
        if ai_answers:
            pruned.append(ai_answers[-1])

    return pruned


def _trim_messages(messages: list[AnyMessage]) -> list[AnyMessage]:
    """Prune history so only the current turn retains full tool context.

    For completed prior turns we keep only the HumanMessage and the final
    AIMessage (the answer the user saw).  All intermediate tool calls and
    tool results are dropped — they're already summarised in the AI answer.

    The current (in-progress) turn is kept intact so the agent can continue
    its reasoning loop with its own tool results still visible.
    """
    # Split into turns — each turn begins at a HumanMessage.
    turns: list[list[AnyMessage]] = []
    current: list[AnyMessage] = []
    for msg in messages:
        if isinstance(msg, HumanMessage) and current:
            turns.append(current)
            current = [msg]
        else:
            current.append(msg)
    if current:
        turns.append(current)

    if len(turns) <= 1:
        return messages  # Only one turn — nothing to prune.

    # For each completed prior turn keep only: HumanMessage + last AIMessage
    # (the final answer, which has no tool_calls).
    pruned: list[AnyMessage] = []
    for turn in turns[:-1]:
        human_msgs = [m for m in turn if isinstance(m, HumanMessage)]
        ai_answers = [
            m for m in turn
            if isinstance(m, AIMessage) and not getattr(m, "tool_calls", None)
        ]
        pruned.extend(human_msgs)
        if ai_answers:
            pruned.append(ai_answers[-1])

    # Current turn stays untouched.
    pruned.extend(turns[-1])
    return pruned


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
        model_kwargs={"parallel_tool_calls": False},
    )


# ---------------------------------------------------------------------------
# Graph Nodes
# ---------------------------------------------------------------------------


async def agent(state: DocNavState) -> DocNavState:
    """Call the LLM with MCP tools bound. The LLM decides what to call."""
    client = get_mcp_client()
    mcp_tools = await client.get_tools()
    llm = get_llm().bind_tools(mcp_tools)

    messages = _agent_context(list(state["messages"]))
    if not isinstance(messages[0], SystemMessage):
        messages = [SystemMessage(content=SYSTEM_PROMPT)] + messages

    response = await llm.ainvoke(messages)
    return {"messages": [response]}


async def tools(state: DocNavState) -> DocNavState:
    """Execute tool calls made by the LLM in the last AI message."""
    client = get_mcp_client()
    mcp_tools = await client.get_tools()
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
            if len(content) > MAX_TOOL_RESULT_CHARS:
                content = content[:MAX_TOOL_RESULT_CHARS] + "\n\n...[result truncated — use get_node_content with specific node IDs for more detail]"
        results.append(ToolMessage(content=content, tool_call_id=tc["id"]))

    return {"messages": results}


async def critique(state: DocNavState) -> DocNavState:
    """Review the proposed answer for completeness; fetch missing info if needed.

    Runs once per user turn (critique_done prevents re-entry).  The critique
    LLM has tools bound so it can do additional tool calls when it finds gaps.
    """
    client = get_mcp_client()
    mcp_tools = await client.get_tools()
    llm = get_llm().bind_tools(mcp_tools)

    messages = _critique_context(list(state["messages"]))
    if not isinstance(messages[0], SystemMessage):
        messages = [SystemMessage(content=SYSTEM_PROMPT)] + messages

    # Append critique instruction so the LLM knows its role in this pass.
    messages = messages + [SystemMessage(content=CRITIQUE_PROMPT)]

    response = await llm.ainvoke(messages)
    # Mark critique as done so we don't loop back here after any extra tool calls.
    return {"messages": [response], "critique_done": True}


# ---------------------------------------------------------------------------
# Routing
# ---------------------------------------------------------------------------


def after_agent(state: DocNavState) -> str:
    """Route to tools, critique, or END depending on agent output."""
    last_msg = state["messages"][-1]
    if getattr(last_msg, "tool_calls", None):
        return "tools"
    # No tool calls — agent has a proposed answer.
    # Send to critique unless critique already ran this turn.
    if not state.get("critique_done", False):
        return "critique"
    return END


def after_critique(state: DocNavState) -> str:
    """Route to tools if critique wants more info, otherwise finish."""
    last_msg = state["messages"][-1]
    if getattr(last_msg, "tool_calls", None):
        return "tools"
    return END


# ---------------------------------------------------------------------------
# Graph Construction
# ---------------------------------------------------------------------------


def build_graph():
    """Build and compile the DocNav ReAct→critique graph."""
    g = StateGraph(DocNavState)

    g.add_node("agent", agent)
    g.add_node("tools", tools)
    g.add_node("critique", critique)

    g.set_entry_point("agent")
    g.add_conditional_edges("agent", after_agent, {"tools": "tools", "critique": "critique", END: END})
    g.add_edge("tools", "agent")
    g.add_conditional_edges("critique", after_critique, {"tools": "tools", END: END})

    return g.compile()


# The compiled graph — imported by Aegra
graph = build_graph()
