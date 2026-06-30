/**
 * Sitemap index fetching + gzip decompression + URL extraction.
 * help.webex.com uses a sitemap index with 29 gzipped sitemaps.
 */

import { gunzipSync } from "bun";

const SITEMAP_INDEX_URL = "https://help.webex.com/sitemap.xml";

/** Known landing pages that may not appear in sitemaps */
const LANDING_SEEDS: Record<string, string> = {
  "https://help.webex.com/en-us/ld-v6m1dl": "whats-new",
};

/**
 * Article URLs known to be missing from Webex's sitemap.
 * Add any article URL here that the agent needs but isn't discovered
 * automatically via sitemap or link extraction from other pages.
 */
const ARTICLE_SEEDS: string[] = [
  "https://help.webex.com/en-us/article/t9xctu/Get-started-with-Local-Gateway",
  "https://help.webex.com/en-us/article/noei0ug/Configuring-a-Partner-Hosted-Gateway",
];

interface SitemapUrl {
  loc: string;
  lastmod?: string;
}

/** Extract all <loc> values from a sitemap XML string. */
function parseLocTags(xml: string): SitemapUrl[] {
  const results: SitemapUrl[] = [];
  // Match each <url> or <sitemap> block
  const locRegex = /<loc>\s*(.*?)\s*<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = locRegex.exec(xml)) !== null) {
    results.push({ loc: match[1].trim() });
  }
  return results;
}

/** Fetch a URL with retry logic for transient errors (503, 429, etc.). */
async function fetchWithRetry(url: string, maxRetries = 3, verbose = false): Promise<Response> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const res = await fetch(url);
    if (res.ok) return res;
    if (res.status === 503 || res.status === 429 || res.status >= 500) {
      const backoff = Math.min(2000 * 2 ** attempt, 30000);
      if (verbose) console.log(`[sitemap] ${res.status} on ${url}, retrying in ${backoff}ms (${attempt + 1}/${maxRetries + 1})`);
      await new Promise((r) => setTimeout(r, backoff));
      continue;
    }
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  throw new Error(`Failed to fetch ${url} after ${maxRetries + 1} attempts`);
}

/** Fetch the sitemap index and return all individual sitemap URLs. */
async function fetchSitemapIndex(
  verbose: boolean
): Promise<string[]> {
  if (verbose) console.log(`[sitemap] Fetching index: ${SITEMAP_INDEX_URL}`);
  const res = await fetchWithRetry(SITEMAP_INDEX_URL, 3, verbose);
  const xml = await res.text();
  const entries = parseLocTags(xml);
  const urls = entries.map((e) => e.loc);
  if (verbose) console.log(`[sitemap] Found ${urls.length} sitemaps in index`);
  return urls;
}

/** Fetch and decompress a single gzipped sitemap, return all <loc> URLs. */
async function fetchGzippedSitemap(
  url: string,
  verbose: boolean
): Promise<string[]> {
  if (verbose) console.log(`[sitemap] Fetching: ${url}`);
  let res: Response;
  try {
    res = await fetchWithRetry(url, 3, verbose);
  } catch {
    console.warn(`[sitemap] Failed to fetch ${url} after retries`);
    return [];
  }

  const compressed = new Uint8Array(await res.arrayBuffer());
  let xml: string;
  try {
    const decompressed = gunzipSync(compressed);
    xml = new TextDecoder().decode(decompressed);
  } catch (err) {
    // Maybe it's not actually gzipped (some servers serve uncompressed)
    xml = new TextDecoder().decode(compressed);
  }

  const entries = parseLocTags(xml);
  return entries.map((e) => e.loc);
}

export interface DiscoveredUrls {
  /** Article/page URLs filtered by locale */
  articleUrls: string[];
  /** Landing page seed URLs (What's New, etc.) */
  landingUrls: { url: string; slug: string }[];
  /** Total URLs before locale filtering */
  totalBeforeFilter: number;
}

/**
 * Discover all URLs from help.webex.com sitemaps.
 * Filters to the specified locale (default: en-us).
 */
export async function discoverUrls(
  locale: string = "en-us",
  verbose: boolean = false
): Promise<DiscoveredUrls> {
  // 1. Fetch sitemap index
  const sitemapUrls = await fetchSitemapIndex(verbose);

  // 2. Fetch all individual sitemaps in parallel (bounded)
  const allUrls: string[] = [];
  const BATCH_SIZE = 5;

  for (let i = 0; i < sitemapUrls.length; i += BATCH_SIZE) {
    const batch = sitemapUrls.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(
      batch.map((url) => fetchGzippedSitemap(url, verbose))
    );
    for (const urls of results) {
      allUrls.push(...urls);
    }
    if (verbose) {
      console.log(
        `[sitemap] Processed ${Math.min(i + BATCH_SIZE, sitemapUrls.length)}/${sitemapUrls.length} sitemaps (${allUrls.length} URLs so far)`
      );
    }
  }

  const totalBeforeFilter = allUrls.length;

  // 3. Filter to locale
  const localePrefix = `/${locale}/`;
  const articleUrls = allUrls.filter((url) => {
    const path = new URL(url).pathname;
    return path.startsWith(localePrefix);
  });

  // 4. Deduplicate
  const uniqueArticles = [...new Set(articleUrls)];

  if (verbose) {
    console.log(
      `[sitemap] ${totalBeforeFilter} total URLs → ${uniqueArticles.length} after locale filter (${locale})`
    );
  }

  // 5. Add landing page seeds (filtered by locale)
  const landingUrls = Object.entries(LANDING_SEEDS).map(([url, slug]) => ({
    url,
    slug,
  }));

  // 6. Merge article seeds — add any not already discovered via sitemap
  const knownSet = new Set(uniqueArticles);
  const seededArticles = [...uniqueArticles];
  for (const url of ARTICLE_SEEDS) {
    if (!knownSet.has(url)) {
      seededArticles.push(url);
      if (verbose) console.log(`[sitemap] Added article seed: ${url}`);
    }
  }

  return {
    articleUrls: seededArticles,
    landingUrls,
    totalBeforeFilter,
  };
}
