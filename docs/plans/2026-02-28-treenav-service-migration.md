# treenav-service Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace `doctree-service/` with `treenav-service/` (embedding treenav-mcp source), update aegra to point at it, delete doctree-service, rename the Railway `docnav` service to `treenav-mcp`, and add a new Railway service for `aegra`.

**Architecture:** The monorepo has three deployable services: `ui/` (React frontend), `treenav-service/` (treenav-mcp HTTP MCP server on bun), and `aegra/` (LangGraph Python agent). Each has its own `railway.json` pointing at its own `Dockerfile`. Railway auto-deploys from `main` on push. Services communicate over Railway private networking.

**Tech Stack:** Bun + TypeScript (treenav-service), Python/LangGraph (aegra), React/Vite (ui), Railway GraphQL API for service management.

---

## Context

### Current repo layout
```
treenav-agent/
  doctree-service/      ← DELETE this
  aegra/                ← update DOCTREE_MCP_URL → TREENAV_MCP_URL
  ui/
  railway.json          ← root, builds ui/Dockerfile
```

### Target repo layout
```
treenav-agent/
  treenav-service/      ← NEW: embed treenav-mcp source
  aegra/                ← updated env var reference
  ui/
  railway.json          ← unchanged
```

### Railway services (project: treenav-agent, ID: 03931400-a5d9-4dde-804c-f6d8cc2695a7)
- `docnav` (ea7f1049) → rename to `treenav-mcp`, root railway.json = UI
- ADD new service `aegra` pointing to `aegra/Dockerfile`
- ADD new service `treenav-service` pointing to `treenav-service/Dockerfile`

### Key env vars for aegra
- `TREENAV_MCP_URL` — Railway private URL to treenav-service (set after service is created)
- `OPENAI_KEY` — already expected by aegra

---

## Task 1: Create treenav-service/ folder

**Files:**
- Create: `treenav-service/` (directory)
- Source from: `../treenav-mcp/src/`, `../treenav-mcp/bin.ts`, `../treenav-mcp/package.json`, `../treenav-mcp/bun.lock`
- Create: `treenav-service/Dockerfile`
- Create: `treenav-service/railway.json`
- Create: `treenav-service/docs/` (copy from `doctree-service/docs/`)

**Step 1: Copy treenav-mcp source into treenav-service/**

```bash
mkdir -p treenav-service/src
cp -r ../treenav-mcp/src/* treenav-service/src/
cp ../treenav-mcp/bin.ts treenav-service/
cp ../treenav-mcp/package.json treenav-service/
cp ../treenav-mcp/bun.lock treenav-service/
cp -r doctree-service/docs treenav-service/docs
```

**Step 2: Create treenav-service/Dockerfile**

Identical to treenav-mcp's Dockerfile (sets DOCS_ROOT, exposes 3100):

```dockerfile
FROM oven/bun:1.3.8 AS base
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --production --frozen-lockfile 2>/dev/null || bun install --production

COPY . .

ENV PORT=3100
ENV DOCS_ROOT=/docs
EXPOSE 3100

CMD ["bun", "run", "src/server-http.ts"]
```

**Step 3: Create treenav-service/railway.json**

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "DOCKERFILE",
    "dockerfilePath": "Dockerfile"
  },
  "deploy": {
    "healthcheckPath": "/health",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

**Step 4: Verify the service starts locally**

```bash
cd treenav-service
DOCS_ROOT=./docs bun run src/server-http.ts
# Expected: "MCP HTTP server running on http://localhost:3100/mcp"
curl http://localhost:3100/health
# Expected: {"status":"ok",...}
```

**Step 5: Commit**

```bash
git add treenav-service/
git commit -m "feat: add treenav-service embedding treenav-mcp source"
```

---

## Task 2: Update aegra to use TREENAV_MCP_URL

**Files:**
- Modify: `aegra/graphs/docnav.py:23,62-68`

**Step 1: Update the env var name and references in docnav.py**

Change line 23:
```python
# Before
DOCTREE_MCP_URL = os.environ.get("DOCTREE_MCP_URL", "http://doctree-mcp:3001")

# After
TREENAV_MCP_URL = os.environ.get("TREENAV_MCP_URL", "http://treenav-service:3100")
```

Change lines 62-68 (get_mcp_client function):
```python
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
```

**Step 2: Commit**

```bash
git add aegra/graphs/docnav.py
git commit -m "feat: switch aegra from doctree-mcp to treenav-mcp"
```

---

## Task 2b: Update aegra system prompts and tool references for treenav-mcp

treenav-mcp exposes different tools than doctree-mcp. The LangGraph graph nodes reference old tool names in system prompts and arg extraction.

**Tool name mapping:**

| Old (doctree, server key "doctree") | New (treenav, server key "treenav") | Signature change |
|---|---|---|
| `doctree__get_tree` | `treenav__get_tree` | Now requires `doc_id` param |
| `doctree__get_node` | `treenav__get_node_content` | Args: `doc_id`, `node_ids` (array) |
| `doctree__get_children` | `treenav__navigate_tree` | Args: `doc_id`, `node_id` |
| *(new)* | `treenav__list_documents` | Browse catalog, optional query/tag |
| *(new)* | `treenav__search_documents` | BM25 keyword search |

**Files:**
- Modify: `aegra/graphs/docnav.py`

**Step 1: Update planner() system prompt (line ~120)**

```python
# Before
"First, call doctree__get_tree to see the document structure. "
"Then decide which node IDs to explore. Return a list of node IDs."

# After
"First, call treenav__list_documents to see available documents. "
"Then call treenav__get_tree with the relevant doc_id to see its structure. "
"Decide which node IDs to explore. Return a list of doc_id:node_id pairs."
```

**Step 2: Update planner() arg extraction (line ~134)**

```python
# Before
if "nodeId" in tool_call.get("args", {}):
    plan.append(tool_call["args"]["nodeId"])

# After
args = tool_call.get("args", {})
if "node_id" in args:
    doc_id = args.get("doc_id", "")
    plan.append(f"{doc_id}:{args['node_id']}")
elif "doc_id" in args:
    plan.append(args["doc_id"])
```

**Step 3: Update navigator() system prompt (lines ~165-168)**

```python
# Before
f"Fetch the content of document node '{node_id}' using doctree__get_node. "
f"Also get its children using doctree__get_children if it has sub-sections."

# After
f"Fetch the content of document node '{node_id}' using treenav__get_node_content "
f"(pass doc_id and node_ids as an array). "
f"To get a section with all subsections, use treenav__navigate_tree instead."
```

**Step 4: Commit**

```bash
git add aegra/graphs/docnav.py
git commit -m "fix: update aegra graph to use treenav-mcp tool names and signatures"
```

---

## Task 3: Delete doctree-service/

**Step 1: Remove the directory**

```bash
git rm -r doctree-service/
git commit -m "chore: remove doctree-service (replaced by treenav-service)"
```

---

## Task 4: Rename Railway service docnav → treenav-mcp

**Step 1: Call Railway GraphQL API**

```bash
TOKEN=$(cat ~/.railway/config.json | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d["user"]["token"])')
SERVICE_ID="ea7f1049-4723-49c6-a0a3-cd659e35ff5c"

curl -s -X POST https://backboard.railway.com/graphql/v2 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"query\": \"mutation { serviceUpdate(id: \\\"$SERVICE_ID\\\", input: { name: \\\"treenav-mcp\\\" }) { id name } }\"}"
```

Expected: `{"data":{"serviceUpdate":{"id":"ea7f1049-...","name":"treenav-mcp"}}}`

---

## Task 5: Create Railway service for treenav-service

Railway needs a service pointing to `treenav-service/Dockerfile` with root dir `treenav-service`.

**Step 1: Create the service via GraphQL API**

```bash
TOKEN=$(cat ~/.railway/config.json | python3 -c 'import sys,json; d=json.load(sys.stdin); print(d["user"]["token"])')
PROJECT_ID="03931400-a5d9-4dde-804c-f6d8cc2695a7"

curl -s -X POST https://backboard.railway.com/graphql/v2 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"query\": \"mutation { serviceCreate(input: { projectId: \\\"$PROJECT_ID\\\", name: \\\"treenav-service\\\" }) { id name } }\"}"
```

Save the returned service ID as `TREENAV_SERVICE_ID`.

**Step 2: Link service to the repo and set source directory**

Railway will pick up `treenav-service/railway.json` automatically when the repo is connected. Verify in the Railway dashboard that the service is using `treenav-service/Dockerfile`.

**Step 3: Note the private networking hostname**

After first deploy, the private URL will be `treenav-service.railway.internal:3100`. This is set as `TREENAV_MCP_URL` for aegra in Task 6.

---

## Task 6: Create Railway service for aegra + set env vars

> **Status:** Service created (ID `69459282-282e-417e-b5ab-ef89aa5c9c36`), `TREENAV_MCP_URL` and `MAX_NAV_DEPTH` already set. Remaining: set `DATABASE_URL`, `AUTH_TYPE`, `OPENAI_KEY` after Task 6b is merged.

**Step 1: Create the service** ✅ Done

**Step 2: Set environment variables for aegra via Railway CLI**

```bash
# Already set:
railway variable set TREENAV_MCP_URL=http://treenav-service.railway.internal:3100 -s aegra
railway variable set MAX_NAV_DEPTH=5 -s aegra

# Still needed (set after Task 6b is deployed):
railway variable set DATABASE_URL="postgresql://postgres:${SUPERBASE}@db.eosmkrryzcjjfzxtakwe.supabase.co:5432/postgres?sslmode=require" -s aegra
railway variable set AUTH_TYPE=noop -s aegra
```

> `OPENAI_KEY` and `SUPERBASE_DB_URL` are in Railway Shared Variables — automatically injected into all services. `DATABASE_URL` for aegra is set as `${{SUPERBASE_DB_URL}}` to reference it.

**Step 3: Verify services in Railway**

```bash
railway service status --all
# Expected: treenav-mcp (UI), treenav-service, aegra — all SUCCESS after deploy
```

---

## Task 6b: Fix aegra as a proper aegra-cli project

The original `Dockerfile` referenced a private Docker Hub image (`ibbybuilds/aegra:latest`) that is inaccessible. Replace it with a self-contained build using `aegra-cli` from PyPI, and add the `aegra.json` config that maps our graph.

**Background:** Aegra is a LangGraph Platform alternative (FastAPI + PostgreSQL). For PaaS deployment the recommended pattern is `aegra serve` — it starts uvicorn directly against an externally-provided `DATABASE_URL` (no Docker-managed PostgreSQL). Our Supabase instance satisfies this requirement.

**Step 1: Replace `aegra/Dockerfile`**

```dockerfile
FROM python:3.12-slim-bookworm
WORKDIR /app

RUN pip install --no-cache-dir aegra-cli langchain-mcp-adapters langchain-openai

COPY . .

EXPOSE 8000

CMD ["aegra", "serve", "--host", "0.0.0.0", "--port", "8000"]
```

**Step 2: Create `aegra/aegra.json`**

```json
{
  "graphs": {
    "docnav": "./graphs/docnav.py:graph"
  }
}
```

This tells the aegra runtime to load the `graph` export from `graphs/docnav.py` under the route name `docnav`.

**Step 3: Commit**

```bash
git add aegra/Dockerfile aegra/aegra.json
git commit -m "fix: replace aegra Dockerfile with aegra-cli build, add aegra.json"
git push origin main
```

**Step 4: Set remaining Railway env vars and verify deploy**

```bash
railway variable set DATABASE_URL='${{SUPERBASE_DB_URL}}' -s aegra
railway variable set AUTH_TYPE=noop -s aegra
# OPENAI_KEY and SUPERBASE_DB_URL — both in Railway Shared Variables, auto-injected

# Watch deployment
railway logs -s aegra --latest
railway deployment list -s aegra
```

**Step 5: Smoke test**

```bash
curl https://<aegra-public-domain>/health
# Expected: {"status":"healthy"}
```

---

## Task 7: Push to main and verify auto-deploy

**Step 1: Push all commits**

```bash
git push origin main
```

**Step 2: Watch deployments**

```bash
railway logs -s treenav-service --latest
railway logs -s aegra --latest
```

**Step 3: Smoke test**

```bash
# treenav-service health
curl https://<treenav-service-domain>/health
# Expected: {"status":"ok","document_count":...}

# aegra health
curl https://docnav-production.up.railway.app/health
# Expected: {"status":"ok"}
```

---

## Notes

- treenav-mcp's `server-http.ts` reads `DOCS_ROOT` env var (default `./docs`). Do **not** override with `ENV DOCS_ROOT=/docs` in the Dockerfile — `WORKDIR /app` + `COPY . .` places docs at `/app/docs`, so the default `./docs` resolves correctly.
- Railway private networking hostnames follow the pattern `<service-name>.railway.internal`. The port matches what the service EXPOSEs (3100 for treenav-service, 8000 for aegra).
- aegra uses `aegra-cli` from PyPI (not a pre-built Docker Hub image). `aegra serve` runs uvicorn directly and expects `DATABASE_URL` to point at an external PostgreSQL instance (Supabase). No Railway-managed PostgreSQL needed.
- aegra.json `graphs` field maps route names to `path/to/file.py:export_name`. Our export is `graph = build_graph()` in `graphs/docnav.py`.
- `AUTH_TYPE=noop` disables authentication — suitable for internal/Railway-private service. Harden before public exposure.
- Root `railway.json` (→ ui/Dockerfile) is untouched — the UI service keeps working.
- Credentials: `SUPERBASE` password in `.env`; `DATABASE_URL` uses `?sslmode=require` for Supabase.
