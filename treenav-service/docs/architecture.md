# Architecture Overview

## System Components

DocNav consists of three main services:

### Aegra (Agent Backend)

The core agent service built on FastAPI and LangGraph. Aegra manages:

- **Agent execution** — Runs the DocNav LangGraph agent for each user query.
- **Conversation management** — Stores and retrieves conversation threads.
- **Authentication** — JWT-based auth (Phase 1) or OIDC (Phase 2).
- **Streaming** — Server-Sent Events for real-time response streaming.

### doctree-mcp (Document Tool Server)

An MCP (Model Context Protocol) server that exposes document tree navigation as tools:

- `doctree_get_tree` — Returns the root tree structure.
- `doctree_get_node` — Fetches the full content of a specific node.
- `doctree_get_children` — Lists children of a node.
- `doctree_search` — Keyword search within the tree.
- `doctree_get_path` — Returns the breadcrumb path to a node.

### PostgreSQL

Stores LangGraph agent checkpoints, conversation threads, and user sessions.

## Data Flow

1. User sends a message via the React UI.
2. Aegra receives the message and starts a LangGraph agent run.
3. The agent decides if document context is needed.
4. If yes, the agent calls doctree-mcp tools to navigate the document tree.
5. The agent synthesises an answer from the retrieved content.
6. The response is streamed back to the UI via SSE.

## Deployment Models

- **Phase 1 (SaaS)** — Deployed on Railway with managed PostgreSQL.
- **Phase 2 (Enterprise)** — Self-hosted via Docker Compose or Helm chart.
