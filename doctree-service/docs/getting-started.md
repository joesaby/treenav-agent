# Getting Started with DocNav

Welcome to DocNav — intelligent document navigation powered by agentic AI.

## What is DocNav?

DocNav is a document retrieval system that uses an AI agent to navigate your documentation tree structure. Unlike traditional search or RAG-based systems, DocNav follows the hierarchy of your documents to find precise answers.

## How It Works

1. **You ask a question** — Type your question in the chat interface.
2. **The agent plans** — DocNav examines your document tree structure.
3. **The agent navigates** — It follows headings and sections to find relevant content.
4. **You get an answer** — A synthesised answer with references to the source documents.

## Key Concepts

### Document Tree

Your documents are organised as a tree structure with:

- **Root nodes** — Top-level documents or categories.
- **Child nodes** — Sections, headings, and sub-documents.
- **Leaf nodes** — Individual content blocks.

### Navigation Trace

Every answer includes a navigation trace showing exactly which document nodes the agent visited. This provides full transparency and auditability.

### No Embeddings Required

DocNav does not use embeddings, vector databases, or cosine similarity. The agent reads your docs the way a human would — by following structure.

## Quick Start

1. Upload your documentation (Markdown, HTML, or plain text).
2. Open the DocNav chat interface.
3. Ask a question about your documentation.
4. Review the answer and navigation trace.

## Supported Document Formats

- Markdown (`.md`)
- HTML (`.html`)
- Plain text (`.txt`)
- reStructuredText (`.rst`)
