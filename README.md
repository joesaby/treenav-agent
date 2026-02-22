# DocNav Service

Agentic document navigation — no RAG, no vector DB, no embeddings.

A LangGraph agent traverses a live document tree to locate and synthesise precise information. Structure-aware retrieval with zero embedding infrastructure.

## Architecture

```
  Browser ──► React UI ──► Aegra (FastAPI + LangGraph) ──► doctree-mcp (MCP tools)
                                      │
                                 PostgreSQL
```

- **Aegra** — Agent backend (FastAPI + LangGraph). Runs the DocNav agent graph.
- **doctree-mcp** — MCP tool server exposing document tree navigation over HTTP.
- **UI** — React chat frontend with streaming support.
- **PostgreSQL** — Conversation history and agent checkpoints.

## Quick Start

```bash
cp .env.example .env
# Edit .env — add your OPENAI_KEY

docker compose up
```

Then open http://localhost:5173 for the UI and http://localhost:8000/health for the API.

## Repository Structure

```
docnav-service/
├── aegra/                  # Agent backend (extends ibbybuilds/aegra)
│   ├── graphs/docnav.py    # LangGraph agent graph
│   ├── Dockerfile
│   └── requirements.txt
├── doctree-service/        # doctree-mcp wrapper
│   ├── server.js           # MCP HTTP server entrypoint
│   ├── Dockerfile
│   └── docs/               # Sample documents
├── ui/                     # React chat frontend
│   ├── src/
│   ├── Dockerfile
│   └── vite.config.ts
├── docker-compose.yml      # Local development
├── docker-compose.prod.yml # Enterprise self-hosted
├── railway.json            # Railway multi-service config
└── .env.example
```

## Deployment

### Railway (Phase 1 — SaaS)

```bash
npm install -g @railway/cli
railway login
railway init
railway add --plugin postgresql
railway up
```

### Enterprise (Phase 2 — Self-hosted)

```bash
docker compose -f docker-compose.prod.yml up -d
```

## Environment Variables

See [.env.example](.env.example) for all required configuration.

## License

Proprietary — DocNav Service.
