import { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import type { Message } from "../hooks/useDocNav";

interface ChatWindowProps {
  messages: Message[];
  isStreaming: boolean;
}

export function ChatWindow({ messages, isStreaming }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center" style={{ color: "var(--muted-foreground)" }}>
          <h2 className="mb-2 text-xl font-semibold" style={{ color: "var(--foreground)" }}>
            Welcome to DocNav
          </h2>
          <p>Ask a question about your documentation to get started.</p>
          <p className="mt-1 text-sm">
            The agent will navigate your document tree to find the answer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4">
      <div className="mx-auto max-w-3xl space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isStreaming={isStreaming && message === messages[messages.length - 1]}
          />
        ))}
      </div>
    </div>
  );
}
