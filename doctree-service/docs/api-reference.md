# API Reference

## Base URL

- **Local development:** `http://localhost:8000`
- **Railway (SaaS):** `https://aegra-{project}.up.railway.app`

## Authentication

All endpoints (except `/health`) require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

In development mode (`AUTH_MODE=noauth`), authentication is disabled.

## Endpoints

### Health Check

```
GET /health
```

Returns service health status.

**Response:**
```json
{
  "status": "ok",
  "service": "aegra",
  "version": "0.1.0"
}
```

### Assistants

#### Create Assistant

```
POST /assistants
```

**Request Body:**
```json
{
  "graph_id": "docnav",
  "config": {
    "configurable": {
      "customer_id": "acme"
    }
  }
}
```

#### Get Assistant

```
GET /assistants/{assistant_id}
```

### Threads

#### Create Thread

```
POST /threads
```

#### Get Thread

```
GET /threads/{thread_id}
```

Returns thread details including message history.

### Runs

#### Stream a Run

```
POST /threads/{thread_id}/runs/stream
```

**Request Body:**
```json
{
  "assistant_id": "asst_abc123",
  "input": {
    "messages": [
      {
        "type": "human",
        "content": "How does authentication work?"
      }
    ]
  },
  "config": {
    "configurable": {
      "customer_id": "acme",
      "max_nav_depth": 3,
      "model": "claude-sonnet-4-5"
    }
  }
}
```

**Response:** Server-Sent Events stream with agent output.

#### Get Run Status

```
GET /threads/{thread_id}/runs/{run_id}
```

### Configuration

#### Get Customer Config

```
GET /config
```

Returns branding and configuration for the current customer context.
