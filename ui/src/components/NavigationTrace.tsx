import type { TraceEntry } from "../hooks/useDocNav";

interface NavigationTraceProps {
  traces: TraceEntry[];
}

export function NavigationTrace({ traces }: NavigationTraceProps) {
  if (traces.length === 0) {
    return (
      <div>
        <h3 className="mb-2 text-sm font-semibold">Navigation Trace</h3>
        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          No navigation trace yet. Ask a question to see which document nodes
          the agent visits.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold">Navigation Trace</h3>
      <div className="space-y-2">
        {traces.map((trace, index) => (
          <div
            key={index}
            className="rounded-md border p-2 text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block rounded px-1.5 py-0.5 font-mono text-xs"
                style={{
                  backgroundColor: "var(--muted)",
                  color: "var(--primary)",
                }}
              >
                {trace.tool}
              </span>
              {trace.nodeId && (
                <span style={{ color: "var(--muted-foreground)" }}>
                  {trace.nodeId}
                </span>
              )}
            </div>
            <div
              className="mt-1 text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              {new Date(trace.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
