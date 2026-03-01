"""
DocNav LangGraph Agent Graph

Agentic document navigation — no RAG, no vector DB, no embeddings.
The agent traverses a live document tree via doctree-mcp tools to locate
and synthesise precise answers from structured documentation.
"""

import os
import re
from typing import Any, TypedDict

from langchain_openai import ChatOpenAI
from langchain_core.messages import AnyMessage, HumanMessage, SystemMessage
from langchain_mcp_adapters.client import MultiServerMCPClient
from langgraph.graph import END, StateGraph

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

MAX_NAV_DEPTH = int(os.environ.get("MAX_NAV_DEPTH", "5"))
DEFAULT_MODEL = os.environ.get("DOCNAV_MODEL", "gpt-4o")
TREENAV_MCP_URL = os.environ.get("TREENAV_MCP_URL", "http://treenav-service:3100")

SYSTEM_PROMPT = """You are DocNav, an intelligent document navigation assistant.
You help users find information in documentation by navigating a document tree structure.

When a user asks a question:
1. Determine if the question requires document context or if you can answer directly.
2. If document context is needed, use the doctree tools to navigate the document tree.
3. Start by getting the tree structure to understand what's available.
4. Navigate to relevant nodes based on headings, section names, and content.
5. Synthesise a clear, accurate answer from the document content you find.

Always cite which document nodes you used to form your answer.
Be precise and factual — only state what the documents actually say."""

# ---------------------------------------------------------------------------
# State
# ---------------------------------------------------------------------------


class DocNavState(TypedDict):
    messages: list[AnyMessage]  # full conversation history
    query: str  # current user query
    tree_context: list[dict]  # nodes fetched this turn
    navigation_plan: list[str]  # node IDs to visit
    visited_nodes: list[str]  # nodes already fetched
    answer: str  # synthesised answer
    needs_docs: bool  # did router decide to navigate?
    depth: int  # navigation depth counter


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _extract_text(result: Any) -> str:
    """Extract plain text from an MCP tool result.

    langchain-mcp-adapters may return a plain str, a list of content dicts,
    or a LangChain message object.  Normalise all of these to a plain string
    so we never pass internal LangChain IDs (lc_<uuid>) to the LLM.
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
    # LangChain message / ToolMessage / AIMessage
    if hasattr(result, "content"):
        return _extract_text(result.content)
    return str(result)


# ---------------------------------------------------------------------------
# MCP Client
# ---------------------------------------------------------------------------


def get_mcp_client():
    """Create an MCP client configured for the treenav-mcp server."""
    return MultiServerMCPClient(
        {
            "treenav": {
                "url": TREENAV_MCP_URL + "/mcp",
                "transport": "streamable_http",
            }
        }
    )


# ---------------------------------------------------------------------------
# LLM
# ---------------------------------------------------------------------------


def get_llm(model: str | None = None):
    """Create a ChatOpenAI instance."""
    return ChatOpenAI(
        model=model or DEFAULT_MODEL,
        api_key=os.environ.get("OPENAI_KEY"),
        max_tokens=4096,
    )


# ---------------------------------------------------------------------------
# Graph Nodes
# ---------------------------------------------------------------------------


def router(state: DocNavState) -> DocNavState:
    """Classify whether the query needs document context."""
    llm = get_llm()
    messages = [
        SystemMessage(
            content=(
                "You are a query classifier. Given the user's message, determine "
                "if it requires looking up documentation or if you can answer directly. "
                "Respond with exactly 'NEEDS_DOCS' or 'DIRECT'."
            )
        ),
        HumanMessage(content=state["query"]),
    ]
    response = llm.invoke(messages)
    needs_docs = "NEEDS_DOCS" in response.content.upper()
    return {**state, "needs_docs": needs_docs}


async def planner(state: DocNavState) -> DocNavState:
    """Load the document tree and plan which nodes to visit."""
    llm = get_llm()

    mcp_client = get_mcp_client()
    tools = await mcp_client.get_tools()
    tools_by_name = {t.name: t for t in tools}

    # Execute list_documents to get the real available doc IDs
    raw_doc_list = await tools_by_name["list_documents"].ainvoke({})
    doc_list_text = _extract_text(raw_doc_list)

    # Extract valid doc_ids from the list (format: collection:name)
    # Use as allowlist to prevent LLM from hallucinating non-existent IDs
    valid_doc_ids = set(re.findall(r'\b(\w[\w\-]*:\w[\w\-:/]*)', doc_list_text))

    # Ask LLM to select the most relevant documents for the query
    messages = [
        SystemMessage(
            content=(
                "You are selecting which documents to read to answer the user's question. "
                "Return ONLY a comma-separated list of the most relevant doc_ids. "
                "No explanation, no extra text — just the doc_ids."
            )
        ),
        HumanMessage(content=f"Query: {state['query']}\n\nAvailable documents:\n{doc_list_text}"),
    ]

    response = await llm.ainvoke(messages)
    # Parse doc IDs from the LLM response; filter to only real doc_ids
    raw = response.content.strip()
    candidates = [d.strip() for d in raw.replace("\n", ",").split(",") if d.strip()]
    plan = [d for d in candidates if d in valid_doc_ids] if valid_doc_ids else candidates

    return {
        **state,
        "navigation_plan": plan,
        "tree_context": [],
        "visited_nodes": [],
        "depth": 0,
    }


async def navigator(state: DocNavState) -> DocNavState:
    """Navigate through planned nodes, fetching content."""
    llm = get_llm()

    plan = state["navigation_plan"]
    visited = list(state["visited_nodes"])
    context = list(state["tree_context"])
    depth = state["depth"]

    mcp_client = get_mcp_client()
    tools = await mcp_client.get_tools()
    tools_by_name = {t.name: t for t in tools}

    # Visit next unvisited document from the plan
    for doc_id in plan:
        if doc_id in visited:
            continue
        if depth >= MAX_NAV_DEPTH:
            break

        # Get tree outline to find the first (root-level) node_id
        raw_tree = await tools_by_name["get_tree"].ainvoke({"doc_id": doc_id})
        tree_text = _extract_text(raw_tree)

        # Parse the first node_id from the outline (format: [doc_id:n1] ...)
        first_node_match = re.search(r'\[(' + re.escape(doc_id) + r':n\d+)\]', tree_text)

        if first_node_match:
            # Fetch full content via navigate_tree from the real root node
            raw_content = await tools_by_name["navigate_tree"].ainvoke(
                {"doc_id": doc_id, "node_id": first_node_match.group(1)}
            )
            content = _extract_text(raw_content)
        else:
            # Fallback: use the tree outline as context
            content = tree_text

        context.append(
            {
                "tool": "navigate_tree",
                "doc_id": doc_id,
                "content": content,
            }
        )

        visited.append(doc_id)
        depth += 1

    return {
        **state,
        "tree_context": context,
        "visited_nodes": visited,
        "depth": depth,
    }


def synthesiser(state: DocNavState) -> DocNavState:
    """Synthesise an answer from the collected document context."""
    llm = get_llm()

    context_text = "\n\n".join(
        f"[Document: {c.get('doc_id', 'unknown')}]\n{c.get('content', str(c))}"
        for c in state["tree_context"]
    )

    messages = [
        SystemMessage(content=SYSTEM_PROMPT),
        HumanMessage(
            content=(
                f"Based on the following document context, answer the user's question.\n\n"
                f"Question: {state['query']}\n\n"
                f"Document Context:\n{context_text}\n\n"
                f"Provide a clear, accurate answer citing the relevant document nodes."
            )
        ),
    ]

    response = llm.invoke(messages)
    return {**state, "answer": response.content}


def responder(state: DocNavState) -> DocNavState:
    """Format and return the final response."""
    if state.get("answer"):
        answer = state["answer"]
    else:
        # Direct response — no doc navigation needed
        llm = get_llm()
        messages = [
            SystemMessage(content=SYSTEM_PROMPT),
            HumanMessage(content=state["query"]),
        ]
        response = llm.invoke(messages)
        answer = response.content

    # Append assistant message to conversation history
    from langchain_core.messages import AIMessage

    messages = list(state["messages"])
    messages.append(AIMessage(content=answer))

    return {**state, "messages": messages, "answer": answer}


# ---------------------------------------------------------------------------
# Routing Logic
# ---------------------------------------------------------------------------


def should_navigate(state: DocNavState) -> str:
    """Route from router node based on whether docs are needed."""
    if state.get("needs_docs"):
        return "planner"
    return "responder"


def should_continue_navigating(state: DocNavState) -> str:
    """Decide whether to continue navigating or move to synthesis."""
    plan = state.get("navigation_plan", [])
    visited = state.get("visited_nodes", [])
    depth = state.get("depth", 0)

    unvisited = [n for n in plan if n not in visited]
    if unvisited and depth < MAX_NAV_DEPTH:
        return "navigator"
    return "synthesiser"


# ---------------------------------------------------------------------------
# Graph Construction
# ---------------------------------------------------------------------------


def build_graph():
    """Build and compile the DocNav LangGraph graph."""
    graph = StateGraph(DocNavState)

    # Add nodes
    graph.add_node("router", router)
    graph.add_node("planner", planner)
    graph.add_node("navigator", navigator)
    graph.add_node("synthesiser", synthesiser)
    graph.add_node("responder", responder)

    # Set entry point
    graph.set_entry_point("router")

    # Add edges
    graph.add_conditional_edges("router", should_navigate)
    graph.add_edge("planner", "navigator")
    graph.add_conditional_edges("navigator", should_continue_navigating)
    graph.add_edge("synthesiser", "responder")
    graph.add_edge("responder", END)

    return graph.compile()


# The compiled graph — imported by Aegra
graph = build_graph()
