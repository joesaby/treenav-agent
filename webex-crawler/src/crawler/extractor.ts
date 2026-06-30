/**
 * HTML content extraction for help.webex.com pages.
 * Detects page type (article vs landing vs error) and extracts the relevant content.
 */

export interface ArticleMetadata {
  title: string;
  product: string;
  articleId: string;
  lastUpdated: string;
  description: string;
  tags: string[];
}

export interface ExtractedArticle {
  type: "article";
  metadata: ArticleMetadata;
  contentHtml: string;
}

export interface ExtractedLanding {
  type: "landing";
  title: string;
  sections: { heading: string; html: string }[];
}

export interface ExtractedError {
  type: "error";
  reason: string;
}

export type ExtractedPage = ExtractedArticle | ExtractedLanding | ExtractedError;

/**
 * Simple HTML tag/attribute extractor using regex.
 * We avoid pulling in a full DOM parser to stay lightweight;
 * help.webex.com's structure is consistent enough for regex.
 */

/** Extract content of the first matching element by class or id pattern. */
function extractByPattern(html: string, pattern: RegExp): string | null {
  const match = pattern.exec(html);
  return match ? match[1] : null;
}

/** Extract text content from HTML (strip all tags). */
export function stripHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract the article ID from a help.webex.com URL. */
export function extractArticleId(url: string): string {
  // Pattern: /en-us/article/{id}/title or /en-us/article/{id}
  const articleMatch = url.match(/\/article\/([^/]+)/);
  if (articleMatch) return articleMatch[1];

  // Landing pages: /en-us/ld-{id} or /en-us/landing/ld-{id}/title
  const landingMatch = url.match(/\/(ld-[^/]+)/);
  if (landingMatch) return landingMatch[1];

  // Fallback: last path segment
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] || "unknown";
}

/**
 * Detect if this is a true error/not-found page.
 * help.webex.com is an SPA that always ships the error template in its shell HTML,
 * so we can't just check for "embarrassing" — we need to verify that real article
 * content is absent before declaring it an error page.
 */
function isErrorPage(html: string): boolean {
  // If the page has a real article content container with data attributes, it's not an error
  const hasArticleContent = /<article[^>]*data-product=/i.test(html);
  const hasContentDiv = /class="article-content"[^>]*id="content"/i.test(html);

  if (hasArticleContent || hasContentDiv) {
    // Has real content — check if the content area has substantial text
    const contentMatch = /class="article-content"[^>]*>([\s\S]{200,}?)<\/main>/i.exec(html);
    if (contentMatch) return false; // Real content exists
  }

  // No real article content container — this is likely an error page.
  // The SPA shell always has the "embarrassing" text; real articles have data-product.
  if (!hasArticleContent) {
    return true;
  }

  return false;
}

/** Detect if this is a landing/hub page (not a regular article). */
function isLandingPage(url: string): boolean {
  const path = new URL(url).pathname;
  return path.includes("/landing/") || path.includes("/ld-");
}

/** Remove unwanted HTML sections: nav, footer, sidebar, feedback, related articles. */
function removeNoise(html: string): string {
  let cleaned = html;

  // Remove script and style tags
  cleaned = cleaned.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  cleaned = cleaned.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  cleaned = cleaned.replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, "");

  // Remove nav elements
  cleaned = cleaned.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "");

  // Remove footer
  cleaned = cleaned.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "");

  // Remove elements with common noise classes/ids
  const noisePatterns = [
    /class="[^"]*(?:feedback|rating|helpful|sidebar|related-articles|breadcrumb|language-selector|social-share|cookie)[^"]*"/gi,
    /id="[^"]*(?:feedback|rating|helpful|sidebar|related|breadcrumb)[^"]*"/gi,
  ];

  // Remove "Was this article helpful?" sections
  cleaned = cleaned.replace(
    /<div[^>]*class="[^"]*helpful[^"]*"[^>]*>[\s\S]*?<\/div>/gi,
    ""
  );

  return cleaned;
}

/** Extract the main article content from an article page. */
function extractArticleContent(html: string): string {
  // Strategy: help.webex.com puts article content in:
  //   <div class="article-content" id="content">
  //     <main role="main">
  //       <article data-product="...">
  //         ... actual content ...
  //       </article>
  //     </main>
  //   </div>
  // After that comes feedback/sidebar/footer which we want to exclude.

  // 1. Try to extract content between <main> tags (most reliable)
  const mainMatch = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  if (mainMatch && mainMatch[1].trim().length > 100) {
    return removeNoise(mainMatch[1]);
  }

  // 2. Try the innermost <article> with data-product (the actual content article)
  const articleWithProduct = /<article[^>]*data-product[^>]*>([\s\S]*?)<\/article>/i.exec(html);
  if (articleWithProduct && articleWithProduct[1].trim().length > 100) {
    return removeNoise(articleWithProduct[1]);
  }

  // 3. Try article-content div up to the feedback section
  const contentToFeedback = /class="article-content"[^>]*>([\s\S]*?)(?:<div[^>]*class="[^"]*feedback|<div[^>]*class="[^"]*article_article-right)/i.exec(html);
  if (contentToFeedback && contentToFeedback[1].trim().length > 100) {
    return removeNoise(contentToFeedback[1]);
  }

  // 4. Any <article> tag
  const articleMatch = /<article[^>]*>([\s\S]*?)<\/article>/i.exec(html);
  if (articleMatch && articleMatch[1].trim().length > 100) {
    return removeNoise(articleMatch[1]);
  }

  // 5. Fallback: extract everything between header and footer
  const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
  if (bodyMatch) {
    return removeNoise(bodyMatch[1]);
  }

  return removeNoise(html);
}

/** Extract metadata from page HTML. */
function extractMetadata(html: string, url: string): ArticleMetadata {
  // Title: <title> tag or <h1>
  let title = "";
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  if (titleMatch) {
    title = stripHtml(titleMatch[1]).replace(/\s*[-|]\s*Webex Help Center.*$/i, "").trim();
  }
  if (!title) {
    const h1Match = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
    if (h1Match) title = stripHtml(h1Match[1]);
  }

  // Product: data-product attribute or meta tag
  let product = "";
  const productAttr = /data-product="([^"]+)"/i.exec(html);
  if (productAttr) {
    product = productAttr[1];
  }
  // Fallback: try to extract from breadcrumbs or URL
  if (!product) {
    const breadcrumb = /class="[^"]*breadcrumb[^"]*"[^>]*>[\s\S]*?<a[^>]*>([^<]+)<\/a>/i.exec(html);
    if (breadcrumb) product = stripHtml(breadcrumb[1]);
  }

  // Article ID from URL
  const articleId = extractArticleId(url);

  // Last updated date
  let lastUpdated = "";
  // Look for common date patterns in the page
  const datePatterns = [
    /(?:last\s+)?(?:updated|modified)\s*:?\s*(\w+ \d{1,2},\s*\d{4})/i,
    /(\d{4}-\d{2}-\d{2})/,
    /(\w+ \d{1,2},\s*\d{4})/,
  ];
  for (const pattern of datePatterns) {
    const match = pattern.exec(html);
    if (match) {
      lastUpdated = match[1];
      break;
    }
  }

  // Description: meta description
  let description = "";
  const metaDesc = /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i.exec(html);
  if (metaDesc) {
    description = metaDesc[1];
  }

  // Split comma-separated products into individual tags
  const products = product
    ? product.split(",").map((p) => p.trim()).filter(Boolean)
    : [];

  // Tags: from product names + meta keywords
  const tags: string[] = [];
  for (const p of products) {
    tags.push(p.toLowerCase().replace(/\s+/g, "-"));
  }
  const metaKeywords = /<meta[^>]*name="keywords"[^>]*content="([^"]*)"[^>]*>/i.exec(html);
  if (metaKeywords) {
    tags.push(...metaKeywords[1].split(",").map((t) => t.trim().toLowerCase()));
  }

  // Use first product as the primary product (for directory organization)
  const primaryProduct = products[0] || "uncategorized";

  return {
    title: title || articleId,
    product: primaryProduct,
    articleId,
    lastUpdated,
    description,
    tags: [...new Set(tags)],
  };
}

/**
 * Extract all internal article links from a fetched page's HTML.
 * Used for frontier expansion: discovers pages linked from sitemapped
 * content but not listed in the sitemap themselves.
 *
 * Only returns help.webex.com/{locale}/article/ URLs — same domain,
 * same locale, article pages only. Normalised to strip query params
 * and fragments so deduplication works correctly.
 */
export function extractArticleLinks(html: string, locale: string): string[] {
  const links = new Set<string>();
  const hrefRegex = /href="([^"#][^"]*)"/gi;
  let match: RegExpExecArray | null;

  while ((match = hrefRegex.exec(html)) !== null) {
    const href = match[1];
    try {
      const url = href.startsWith("http")
        ? new URL(href)
        : new URL(href, "https://help.webex.com");

      if (
        url.hostname === "help.webex.com" &&
        url.pathname.includes(`/${locale}/article/`)
      ) {
        // Canonical form: no query params, no fragment
        links.add(`https://help.webex.com${url.pathname}`);
      }
    } catch {
      // skip malformed hrefs
    }
  }

  return [...links];
}

/**
 * Extract content from an HTML page.
 * Returns typed result indicating article, landing, or error page.
 */
export function extractPage(html: string, url: string): ExtractedPage {
  // Landing pages get different treatment — check BEFORE error detection
  // because landing pages lack data-product and would be falsely flagged as errors
  if (isLandingPage(url)) {
    return extractLandingPage(html, url);
  }

  // Check for error pages (articles without data-product are likely 404s)
  if (isErrorPage(html)) {
    return { type: "error", reason: "Article not found (404 page)" };
  }

  // Regular article
  const metadata = extractMetadata(html, url);
  const contentHtml = extractArticleContent(html);

  // Verify we got meaningful content
  const textContent = stripHtml(contentHtml);
  if (textContent.length < 50) {
    return { type: "error", reason: "No meaningful content extracted" };
  }

  return {
    type: "article",
    metadata,
    contentHtml,
  };
}

/** Extract content from a landing/hub page (e.g., What's New). */
function extractLandingPage(html: string, url: string): ExtractedLanding | ExtractedError {
  let title = "";
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  if (titleMatch) {
    title = stripHtml(titleMatch[1]).replace(/\s*[-|]\s*Webex Help Center.*$/i, "").trim();
  }
  if (!title) {
    const h1Match = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
    if (h1Match) title = stripHtml(h1Match[1]);
  }

  // Extract tab panels or major sections
  const sections: { heading: string; html: string }[] = [];

  // Try tab panels first
  const tabPanelRegex = /<div[^>]*(?:role="tabpanel"|class="[^"]*tab-pane[^"]*")[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  let tabMatch: RegExpExecArray | null;
  while ((tabMatch = tabPanelRegex.exec(html)) !== null) {
    const sectionHtml = tabMatch[1];
    const headingMatch = /<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/i.exec(sectionHtml);
    const heading = headingMatch ? stripHtml(headingMatch[1]) : "Section";
    sections.push({ heading, html: removeNoise(sectionHtml) });
  }

  // Fallback: extract major heading sections
  if (sections.length === 0) {
    const bodyMatch = /<body[^>]*>([\s\S]*?)<\/body>/i.exec(html);
    if (bodyMatch) {
      const body = removeNoise(bodyMatch[1]);
      // Split by h2 headings
      const h2Parts = body.split(/<h2[^>]*>/i);
      for (let i = 1; i < h2Parts.length; i++) {
        const closingH2 = h2Parts[i].indexOf("</h2>");
        if (closingH2 > -1) {
          const heading = stripHtml(h2Parts[i].substring(0, closingH2));
          const content = h2Parts[i].substring(closingH2 + 5);
          sections.push({ heading, html: content });
        }
      }
    }
  }

  if (sections.length === 0) {
    return { type: "error", reason: "No sections found in landing page" };
  }

  return {
    type: "landing",
    title: title || "Landing Page",
    sections,
  };
}
