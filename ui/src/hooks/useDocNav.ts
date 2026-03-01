import { useCallback, useRef, useState } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface TraceEntry {
  tool: string;
  nodeId: string;
  timestamp: string;
}

const API_URL = import.meta.env.VITE_API_URL || "";

/**
 * Hook for communicating with the DocNav agent backend.
 * Supports SSE streaming for real-time responses.
 */
export function useDocNav() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [traces, setTraces] = useState<TraceEntry[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const threadIdRef = useRef<string | null>(null);
  const assistantIdRef = useRef<string | null>(null);

  const ensureThread = useCallback(async () => {
    if (threadIdRef.current) return threadIdRef.current;

    const res = await fetch(`${API_URL}/threads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    threadIdRef.current = data.thread_id;
    return data.thread_id;
  }, []);

  const ensureAssistant = useCallback(async () => {
    if (assistantIdRef.current) return assistantIdRef.current;

    const res = await fetch(`${API_URL}/assistants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ graph_id: "docnav" }),
    });
    const data = await res.json();
    assistantIdRef.current = data.assistant_id;
    return data.assistant_id;
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isStreaming) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content,
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsStreaming(true);
      setTraces([]);

      try {
        const threadId = await ensureThread();
        const assistantId = await ensureAssistant();

        const response = await fetch(
          `${API_URL}/threads/${threadId}/runs/stream`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              assistant_id: assistantId,
              input: {
                messages: [{ type: "human", content }],
              },
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let assistantContent = "";
        const assistantId2 = crypto.randomUUID();

        // Add empty assistant message that we'll stream into
        setMessages((prev) => [
          ...prev,
          { id: assistantId2, role: "assistant", content: "" },
        ]);

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6);
            if (data === "[DONE]") continue;

            try {
              const event = JSON.parse(data);

              // Handle different SSE event types
              if (event.type === "token" || event.content) {
                assistantContent += event.content || event.token || "";
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId2
                      ? { ...m, content: assistantContent }
                      : m
                  )
                );
              }

              // Handle tool call traces
              if (event.type === "tool_call" || event.tool) {
                setTraces((prev) => [
                  ...prev,
                  {
                    tool: event.tool || event.name || "unknown",
                    nodeId: event.args?.nodeId || event.nodeId || "",
                    timestamp: new Date().toISOString(),
                  },
                ]);
              }
            } catch {
              // Skip malformed JSON lines
            }
          }
        }

        // If no streaming content was received, set a fallback
        if (!assistantContent) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId2
                ? { ...m, content: "I couldn't generate a response. Please try again." }
                : m
            )
          );
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "An error occurred";
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: `Error: ${errorMessage}`,
          },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [isStreaming, ensureThread, ensureAssistant]
  );

  return { messages, traces, isStreaming, sendMessage };
}
