# Markdown Rendering Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Render assistant responses as formatted Markdown with syntax-highlighted code blocks.

**Architecture:** Two-part change — add a markdown formatting instruction to the LangGraph agent's system prompt, and replace the plain-text `whitespace-pre-wrap` renderer in `MessageBubble.tsx` with `react-markdown` + `react-syntax-highlighter`. User message bubbles are unchanged.

**Tech Stack:** `react-markdown` v9, `react-syntax-highlighter` (Prism), Tailwind v4, TypeScript

---

## Prerequisites

Pull latest main (the ReAct agent is on `origin/main` — do this before creating a worktree):

```bash
git checkout main && git pull origin main
```

---

## Task 1: Update the system prompt to request Markdown output

**Files:**
- Modify: `aegra/graphs/docnav.py`

### Step 1: Open the file and find `SYSTEM_PROMPT`

The variable ends with:
```
Always cite which document node IDs you used. Be precise — only state what the documents say."""
```

### Step 2: Add the formatting instruction as the last sentence

Replace:
```python
Always cite which document node IDs you used. Be precise — only state what the documents say."""
```

With:
```python
Always cite which document node IDs you used. Be precise — only state what the documents say.

Format your response in Markdown — use headers, bullet points, bold, and fenced code blocks where appropriate."""
```

### Step 3: Verify syntax

```bash
python3 -c "
import ast
with open('aegra/graphs/docnav.py') as f:
    ast.parse(f.read())
print('Syntax OK')
"
```

Expected: `Syntax OK`

### Step 4: Commit

```bash
git add aegra/graphs/docnav.py
git commit -m "feat: ask agent to format responses in Markdown"
```

---

## Task 2: Install markdown rendering packages

**Files:**
- Modify: `ui/package.json` (via npm install)

### Step 1: Install the packages

```bash
cd ui
npm install react-markdown react-syntax-highlighter
npm install --save-dev @types/react-syntax-highlighter
```

### Step 2: Verify packages appear in package.json

```bash
grep -E "react-markdown|react-syntax-highlighter" package.json
```

Expected output (versions may differ):
```
"react-markdown": "^9.x.x",
"react-syntax-highlighter": "^15.x.x",
```

### Step 3: Commit

```bash
git add package.json package-lock.json
git commit -m "feat: add react-markdown and react-syntax-highlighter"
```

---

## Task 3: Render assistant messages as Markdown

**Files:**
- Modify: `ui/src/components/MessageBubble.tsx`

### Step 1: Read the current file

Current content of `MessageBubble.tsx`:

```tsx
import type { Message } from "../hooks/useDocNav";

interface MessageBubbleProps {
  message: Message;
  isStreaming: boolean;
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser ? "text-white" : ""
        }`}
        style={{
          backgroundColor: isUser ? "var(--primary)" : "var(--muted)",
          color: isUser ? "var(--primary-foreground)" : "var(--foreground)",
        }}
      >
        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
        {isStreaming && !isUser && (
          <span className="mt-1 inline-block h-4 w-1 animate-pulse bg-current" />
        )}
      </div>
    </div>
  );
}
```

### Step 2: Replace the file with the Markdown-rendering version

```tsx
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Message } from "../hooks/useDocNav";

interface MessageBubbleProps {
  message: Message;
  isStreaming: boolean;
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser ? "text-white" : ""
        }`}
        style={{
          backgroundColor: isUser ? "var(--primary)" : "var(--muted)",
          color: isUser ? "var(--primary-foreground)" : "var(--foreground)",
        }}
      >
        {isUser ? (
          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert text-sm">
            <ReactMarkdown
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  if (match) {
                    return (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md text-xs my-2"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    );
                  }
                  return (
                    <code
                      className="rounded bg-black/10 px-1 py-0.5 font-mono text-xs"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
        {isStreaming && !isUser && (
          <span className="mt-1 inline-block h-4 w-1 animate-pulse bg-current" />
        )}
      </div>
    </div>
  );
}
```

### Step 3: Verify the TypeScript build passes

```bash
cd ui
npm run build 2>&1 | tail -10
```

Expected: build completes with no TypeScript errors. You may see a warning about `@types/react-syntax-highlighter` — that is fine.

### Step 4: Commit

```bash
git add ui/src/components/MessageBubble.tsx
git commit -m "feat: render assistant messages as Markdown with syntax highlighting"
```

---

## Task 4: Push and deploy

### Step 1: Push to main

```bash
git push origin main
```

Railway will auto-deploy both `aegra` (new system prompt) and `treenav-mcp` (new UI build).

### Step 2: Watch aegra build

```bash
railway logs -s aegra --build -n 5 2>&1 | tail -5
```

Expected: `Healthcheck succeeded!`

### Step 3: Watch UI build

```bash
railway logs -s treenav-mcp --build -n 5 2>&1 | tail -5
```

Expected: `Healthcheck succeeded!`
