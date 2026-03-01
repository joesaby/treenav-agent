# Markdown Rendering Design

**Date:** 2026-03-01
**Status:** Approved

## Goal

Render assistant responses as formatted Markdown in the chat UI, including syntax-highlighted code blocks.

## Changes

### 1. System prompt (`aegra/graphs/docnav.py`)

Add a formatting instruction to `SYSTEM_PROMPT`:

> "Format your responses using Markdown — use headers, bullet points, bold, and code blocks where appropriate."

### 2. UI dependencies (`ui/package.json`)

Add:
- `react-markdown` — renders markdown safely in React (no XSS risk)
- `react-syntax-highlighter` + `@types/react-syntax-highlighter` — syntax-highlighted code blocks

### 3. `MessageBubble.tsx`

- User messages: unchanged (plain text, `whitespace-pre-wrap`)
- Assistant messages: rendered via `<ReactMarkdown>` with a custom `code` component that uses `react-syntax-highlighter` for fenced code blocks and inline styling for inline code
