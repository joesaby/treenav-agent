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
