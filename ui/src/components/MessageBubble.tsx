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
          <div className="prose prose-sm max-w-none dark:prose-invert text-sm [&_li+li]:mt-3 [&_li>p]:my-1">
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
