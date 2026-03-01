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
 * Supports SSE streaming (LangGraph messages/partial format) for real-time responses.
 */
export function useDocNav() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [traces, setTraces] = useState<TraceEntry[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const threadIdRef = useRef<string | null>(null);
  const assistantIdRef = useRef<string | null>(null);
  const seenToolCallIds = useRef<Set<string>>(new Set());

  const ensureThread = useCallback(async () => {
    if (threadIdRef.current) return threadIdRef.current;

    const res = await fetch(`${API_URL}/threads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
    if (!res.ok) throw new Error(`Failed to create thread: ${res.status}`);
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

    if (res.status === 409) {
      // Assistant already exists — find it via search
      const searchRes = await fetch(`${API_URL}/assistants/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ graph_id: "docnav" }),
      });
      if (!searchRes.ok) throw new Error(`Failed to find assistant: ${searchRes.status}`);
      const results = await searchRes.json();
      if (!results?.length) throw new Error("No assistant found for graph 'docnav'");
      assistantIdRef.current = results[0].assistant_id;
      return assistantIdRef.current;
    }

    if (!res.ok) throw new Error(`Failed to create assistant: ${res.status}`);
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
      seenToolCallIds.current = new Set();

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
              stream_mode: "messages",
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        const assistantMsgId = crypto.randomUUID();

        setMessages((prev) => [
          ...prev,
          { id: assistantMsgId, role: "assistant", content: "" },
        ]);

        let lineBuffer = "";
        let currentEventType = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          lineBuffer += decoder.decode(value, { stream: true });
          const lines = lineBuffer.split("\n");
          lineBuffer = lines.pop() || "";

          for (const line of lines) {
            if (line.startsWith("event: ")) {
              currentEventType = line.slice(7).trim();
            } else if (line.startsWith("data: ")) {
              const raw = line.slice(6);
              if (raw === "[DONE]") continue;

              try {
                const payload = JSON.parse(raw);

                if (currentEventType === "messages/partial") {
                  const msg = Array.isArray(payload) ? payload[0] : null;
                  if (!msg) continue;

                  // Update displayed content (content is cumulative per run)
                  if (typeof msg.content === "string" && msg.content && msg.type === "ai") {
                    setMessages((prev) =>
                      prev.map((m) =>
                        m.id === assistantMsgId
                          ? { ...m, content: msg.content }
                          : m
                      )
                    );
                  }

                  // Capture tool call traces — deduplicate by ID since
                  // messages/partial re-emits full tool_calls on every token
                  if (msg.tool_calls?.length) {
                    for (const tc of msg.tool_calls) {
                      const tcId = tc.id || `${tc.name}-${JSON.stringify(tc.args)}`;
                      if (!seenToolCallIds.current.has(tcId)) {
                        seenToolCallIds.current.add(tcId);
                        setTraces((prev) => [
                          ...prev,
                          {
                            tool: tc.name || "unknown",
                            nodeId: tc.args?.node_id || tc.args?.doc_id || "",
                            timestamp: new Date().toISOString(),
                          },
                        ]);
                      }
                    }
                  }
                }
              } catch {
                // Skip malformed JSON
              }
            } else if (line === "") {
              currentEventType = "";
            }
          }
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
