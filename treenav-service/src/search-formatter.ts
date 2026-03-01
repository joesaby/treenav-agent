import type { SearchResult, TreeNode } from "./types.js";

/** Minimal store interface needed by the formatter (subset of DocumentStore). */
export interface SubtreeProvider {
  getSubtree(
    doc_id: string,
    node_id: string
  ): { nodes: Pick<TreeNode, "node_id" | "title" | "level" | "content">[] } | null;
}

/** Number of top results for which full subtree content is inlined. */
const INLINE_CONTENT_TOP_N = 3;

/**
 * Format search results as a ranked list, with full subtree content
 * inlined for the top INLINE_CONTENT_TOP_N results.
 *
 * Inlining full content eliminates the need for a follow-up navigate_tree
 * call — the LLM can answer directly from the tool output.
 */
export function formatSearchResults(
  results: SearchResult[],
  store: SubtreeProvider,
  query: string
): string {
  if (results.length === 0) {
    return `No results found for "${query}". Try broader terms or use list_documents to browse the catalog.`;
  }

  // 1. Ranked summary (snippet list)
  const summary = results
    .map(
      (r, i) =>
        `${i + 1}. [${r.doc_id}] ${r.doc_title}\n   Section: ${r.node_title} (${r.node_id})\n   Score: ${r.score.toFixed(1)}\n   Snippet: ${r.snippet}`
    )
    .join("\n\n");

  // 2. Full subtree content for top N
  const contentBlocks = results
    .slice(0, INLINE_CONTENT_TOP_N)
    .map((r) => {
      const subtree = store.getSubtree(r.doc_id, r.node_id);
      if (!subtree || subtree.nodes.length === 0) return null;

      const root = subtree.nodes[0];
      const formatted = subtree.nodes
        .map((n) => {
          const indent = "  ".repeat(Math.max(0, n.level - root.level));
          return `${indent}${"#".repeat(n.level)} ${n.title} [${n.node_id}]\n${indent}${n.content || "(empty)"}`;
        })
        .join("\n\n");

      const subsectionCount = subtree.nodes.length - 1;
      const label =
        subsectionCount > 0
          ? `${r.node_title} + ${subsectionCount} subsection(s)`
          : r.node_title;

      return `=== [${r.doc_id}] ${label} ===\n\n${formatted}`;
    })
    .filter((b): b is string => b !== null);

  const parts = [
    `Search results for "${query}" (${results.length} matches):\n\n${summary}`,
  ];

  if (contentBlocks.length > 0) {
    const n = Math.min(results.length, INLINE_CONTENT_TOP_N);
    parts.push(
      `\n--- Full content (top ${n} match${n === 1 ? "" : "es"}) ---\n\n${contentBlocks.join("\n\n")}`
    );
  }

  return parts.join("\n");
}
