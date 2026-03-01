import { describe, expect, it } from "bun:test";
import { formatSearchResults } from "./search-formatter.js";
import type { SearchResult } from "./types.js";

// ── Helpers ──────────────────────────────────────────────────────────

function makeResult(overrides: Partial<SearchResult> = {}): SearchResult {
  return {
    doc_id: "architecture",
    doc_title: "Architecture Overview",
    file_path: "docs/architecture.md",
    node_id: "system-components",
    node_title: "System Components",
    level: 2,
    snippet: "DocNav consists of three main services:",
    score: 8.2,
    match_positions: [0],
    matched_terms: ["service"],
    collection: "docs",
    facets: {},
    ...overrides,
  };
}

const mockStore = {
  getSubtree: (_doc_id: string, _node_id: string) => ({
    nodes: [
      {
        node_id: "system-components",
        title: "System Components",
        level: 2,
        content: "DocNav consists of three main services:",
        word_count: 8,
      },
      {
        node_id: "aegra-node",
        title: "Aegra (Agent Backend)",
        level: 3,
        content: "The core agent service built on FastAPI and LangGraph.",
        word_count: 12,
      },
      {
        node_id: "postgres-node",
        title: "PostgreSQL",
        level: 3,
        content: "Stores LangGraph agent checkpoints and conversation threads.",
        word_count: 9,
      },
    ],
  }),
};

// ── Tests ─────────────────────────────────────────────────────────────

describe("formatSearchResults", () => {
  it("returns no-results message when results array is empty", () => {
    const out = formatSearchResults([], mockStore, "services");
    expect(out).toContain("No results found");
    expect(out).toContain("services");
  });

  it("includes ranked summary for all results", () => {
    const results = [
      makeResult(),
      makeResult({ node_id: "data-flow", node_title: "Data Flow", score: 3.1 }),
    ];
    const out = formatSearchResults(results, mockStore, "architecture");
    expect(out).toContain("1. [architecture]");
    expect(out).toContain("2. [architecture]");
    expect(out).toContain("System Components");
    expect(out).toContain("Data Flow");
  });

  it("inlines full subtree content for top result", () => {
    const results = [makeResult()];
    const out = formatSearchResults(results, mockStore, "services");
    // Child node content must appear — not just the snippet
    expect(out).toContain("Aegra (Agent Backend)");
    expect(out).toContain("FastAPI and LangGraph");
    expect(out).toContain("PostgreSQL");
  });

  it("inlines at most 3 results regardless of total count", () => {
    const results = Array.from({ length: 5 }, (_, i) =>
      makeResult({ node_id: `node-${i}`, node_title: `Node ${i}`, score: 10 - i })
    );
    const out = formatSearchResults(results, mockStore, "q");
    // All 5 appear in the ranked list
    expect(out).toContain("5. [architecture]");
    // Full content section header is present
    expect(out).toContain("Full content (top 3");
  });

  it("handles store returning null subtree gracefully", () => {
    const nullStore = { getSubtree: () => null };
    const results = [makeResult()];
    const out = formatSearchResults(results, nullStore, "services");
    // Ranked list is still present; no inline content section
    expect(out).toContain("System Components");
    expect(out).not.toContain("Full content");
  });

  it("omits inline content section when all subtrees are null", () => {
    const nullStore = { getSubtree: () => null };
    const results = [makeResult(), makeResult()];
    const out = formatSearchResults(results, nullStore, "q");
    expect(out).not.toContain("Full content");
  });
});
