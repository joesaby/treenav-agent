/**
 * HTTP fetcher with bounded concurrency, rate limiting, and retry logic.
 * Polite crawler: respects rate limits, backs off on 429/5xx.
 */

export interface FetchResult {
  url: string;
  html: string;
  status: number;
  contentHash: string;
}

export interface FetchError {
  url: string;
  error: string;
  status?: number;
}

export type FetchOutcome = { ok: true; result: FetchResult } | { ok: false; error: FetchError };

interface FetcherOptions {
  concurrency: number;
  delayMs: number;
  maxRetries: number;
  verbose: boolean;
}

const DEFAULT_OPTIONS: FetcherOptions = {
  concurrency: 5,
  delayMs: 200,
  maxRetries: 3,
  verbose: false,
};

const USER_AGENT = "treenav-mcp-crawler/1.0 (documentation indexer; +https://github.com/joesaby/treenav-mcp)";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Compute a content hash using Bun.hash (consistent with treenav-mcp's indexer). */
function hashContent(content: string): string {
  return Bun.hash(content).toString(16);
}

/**
 * Fetch a single URL with retries and exponential backoff.
 */
async function fetchWithRetry(
  url: string,
  maxRetries: number,
  verbose: boolean
): Promise<FetchOutcome> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          Accept: "text/html,application/xhtml+xml",
        },
        redirect: "follow",
      });

      if (res.status === 429 || res.status >= 500) {
        const backoff = Math.min(1000 * 2 ** attempt, 30000);
        if (verbose) {
          console.log(`[fetch] ${res.status} on ${url}, retry in ${backoff}ms (attempt ${attempt + 1}/${maxRetries + 1})`);
        }
        await sleep(backoff);
        continue;
      }

      if (res.status === 404) {
        return {
          ok: false,
          error: { url, error: "Not found", status: 404 },
        };
      }

      if (!res.ok) {
        return {
          ok: false,
          error: { url, error: `HTTP ${res.status}`, status: res.status },
        };
      }

      const html = await res.text();
      const contentHash = hashContent(html);

      return {
        ok: true,
        result: { url, html, status: res.status, contentHash },
      };
    } catch (err: any) {
      if (attempt < maxRetries) {
        const backoff = Math.min(1000 * 2 ** attempt, 30000);
        if (verbose) {
          console.log(`[fetch] Error on ${url}: ${err.message}, retry in ${backoff}ms`);
        }
        await sleep(backoff);
        continue;
      }
      return {
        ok: false,
        error: { url, error: err.message },
      };
    }
  }

  return {
    ok: false,
    error: { url, error: "Max retries exceeded" },
  };
}

export interface CrawlProgress {
  completed: number;
  total: number;
  successes: number;
  failures: number;
  skipped: number;
}

export type ProgressCallback = (progress: CrawlProgress) => void;

/**
 * Fetch a list of URLs with bounded concurrency and rate limiting.
 * Yields results as they complete.
 */
export async function fetchAll(
  urls: string[],
  options: Partial<FetcherOptions> = {},
  onProgress?: ProgressCallback
): Promise<{ results: FetchResult[]; errors: FetchError[] }> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const results: FetchResult[] = [];
  const errors: FetchError[] = [];

  let completed = 0;
  let successes = 0;
  let failures = 0;

  // Process URLs in concurrent batches with delay between each request
  const queue = [...urls];
  const active: Promise<void>[] = [];

  async function processUrl(url: string): Promise<void> {
    const outcome = await fetchWithRetry(url, opts.maxRetries, opts.verbose);
    completed++;

    if (outcome.ok) {
      results.push(outcome.result);
      successes++;
    } else {
      errors.push(outcome.error);
      failures++;
    }

    if (onProgress) {
      onProgress({
        completed,
        total: urls.length,
        successes,
        failures,
        skipped: 0,
      });
    }
  }

  for (let i = 0; i < queue.length; i++) {
    // Rate limit: wait between starting new requests
    if (i > 0) {
      await sleep(opts.delayMs);
    }

    const promise = processUrl(queue[i]);
    active.push(promise);

    // When we hit concurrency limit, wait for one to finish
    if (active.length >= opts.concurrency) {
      await Promise.race(active);
      // Remove completed promises
      for (let j = active.length - 1; j >= 0; j--) {
        // Check if promise is settled by racing with an immediate resolve
        const settled = await Promise.race([
          active[j].then(() => true),
          Promise.resolve(false),
        ]);
        if (settled) {
          active.splice(j, 1);
        }
      }
    }
  }

  // Wait for remaining
  await Promise.all(active);

  return { results, errors };
}
