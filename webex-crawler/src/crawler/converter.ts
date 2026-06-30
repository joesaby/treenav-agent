/**
 * HTML → markdown conversion with YAML frontmatter generation.
 * Uses node-html-markdown for robust HTML-to-markdown transformation.
 */

import { NodeHtmlMarkdown } from "node-html-markdown";
import type { ExtractedArticle, ExtractedLanding } from "./extractor";

/** Configured markdown converter */
const nhm = new NodeHtmlMarkdown(
  {
    // Options
    bulletMarker: "-",
    codeBlockStyle: "fenced",
    strongDelimiter: "**",
    emDelimiter: "_",
    // Ignore image tags (help.webex.com images are hosted externally and may break)
    ignore: ["img", "svg", "iframe", "video", "audio"],
  },
  // Custom translators (none needed for now)
  undefined,
  // Custom codeblocklanguage callback
  undefined
);

/** Convert HTML string to markdown. */
function htmlToMarkdown(html: string): string {
  return nhm
    .translate(html)
    .replace(/\n{3,}/g, "\n\n") // Collapse excessive newlines
    .trim();
}

/** Sanitize a string for YAML frontmatter (escape quotes, newlines). */
function yamlEscape(value: string): string {
  if (!value) return '""';
  // If it contains special characters, wrap in quotes
  if (/[:#\[\]{}&*!|>',@`]/.test(value) || value.includes('"')) {
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  return `"${value}"`;
}

/** Generate YAML frontmatter block. */
function generateFrontmatter(fields: Record<string, string | string[]>): string {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}: [${value.map((v) => yamlEscape(v)).join(", ")}]`);
    } else {
      if (!value) continue;
      lines.push(`${key}: ${yamlEscape(value)}`);
    }
  }
  lines.push("---");
  return lines.join("\n");
}

/** Slugify a product name for use as directory name. */
export function slugifyProduct(product: string): string {
  return product
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    || "uncategorized";
}

/** Convert an extracted article to a full markdown document. */
export function articleToMarkdown(article: ExtractedArticle, url: string): string {
  const { metadata, contentHtml } = article;

  const frontmatter = generateFrontmatter({
    title: metadata.title,
    product: metadata.product,
    article_id: metadata.articleId,
    url,
    last_updated: metadata.lastUpdated,
    description: metadata.description,
    tags: metadata.tags,
    source: "help.webex.com",
  });

  const markdownBody = htmlToMarkdown(contentHtml);

  return `${frontmatter}\n\n# ${metadata.title}\n\n${markdownBody}\n`;
}

/** Convert an extracted landing page to a markdown index document. */
export function landingToMarkdown(landing: ExtractedLanding, url: string): string {
  const frontmatter = generateFrontmatter({
    title: landing.title,
    url,
    type: "index",
    source: "help.webex.com",
  });

  const sections = landing.sections
    .map((section) => {
      const body = htmlToMarkdown(section.html);
      return `## ${section.heading}\n\n${body}`;
    })
    .join("\n\n");

  return `${frontmatter}\n\n# ${landing.title}\n\n${sections}\n`;
}

/** Determine the output file path for an article. */
export function getOutputPath(
  article: ExtractedArticle,
  outputDir: string
): string {
  const productDir = slugifyProduct(article.metadata.product);
  return `${outputDir}/${productDir}/${article.metadata.articleId}.md`;
}

/** Determine the output file path for a landing page. */
export function getLandingOutputPath(
  slug: string,
  outputDir: string
): string {
  return `${outputDir}/_index/${slug}.md`;
}
