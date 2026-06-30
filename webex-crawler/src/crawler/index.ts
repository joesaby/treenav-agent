/**
 * Webex Help Center crawler — main orchestrator.
 * Coordinates sitemap discovery, fetching, extraction, conversion, and manifest tracking.
 */

import { discoverUrls } from "./sitemap";
import { fetchAll, type CrawlProgress } from "./fetcher";
import { extractPage, extractArticleLinks, type ExtractedArticle, type ExtractedLanding } from "./extractor";
import {
  articleToMarkdown,
  landingToMarkdown,
  getOutputPath,
  getLandingOutputPath,
  slugifyProduct,
} from "./converter";
import { CrawlManifest } from "./manifest";
import { mkdirSync, existsSync } from "fs";
import { dirname } from "path";

export interface CrawlOptions {
  outputDir: string;
  concurrency: number;
  delayMs: number;
  locale: string;
  dryRun: boolean;
  force: boolean;
  verbose: boolean;
}

export const DEFAULT_CRAWL_OPTIONS: CrawlOptions = {
  outputDir: "../webex-docs",
  concurrency: 5,
  delayMs: 200,
  locale: "en-us",
  dryRun: false,
  force: false,
  verbose: false,
};

interface CrawlStats {
  discovered: number;
  fetched: number;
  converted: number;
  linked: number; // pages found via link extraction, not sitemap
  skipped: number;
  errors: number;
  errorDetails: { url: string; reason: string }[];
}

function ensureDir(filePath: string): void {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

/**
 * Run the full crawl pipeline.
 */
export async function crawl(options: Partial<CrawlOptions> = {}): Promise<CrawlStats> {
  const opts = { ...DEFAULT_CRAWL_OPTIONS, ...options };
  const startTime = Date.now();

  console.log("=== Webex Help Center Crawler ===");
  console.log(`Output:      ${opts.outputDir}`);
  console.log(`Locale:      ${opts.locale}`);
  console.log(`Concurrency: ${opts.concurrency}`);
  console.log(`Delay:       ${opts.delayMs}ms`);
  console.log(`Mode:        ${opts.dryRun ? "DRY RUN" : opts.force ? "FORCE (ignore manifest)" : "INCREMENTAL"}`);
  console.log("");

  const stats: CrawlStats = {
    discovered: 0,
    fetched: 0,
    converted: 0,
    linked: 0,
    skipped: 0,
    errors: 0,
    errorDetails: [],
  };

  // 1. Load manifest
  const manifestPath = `${opts.outputDir}/crawl-manifest.json`;
  const manifest = new CrawlManifest(manifestPath);
  if (!opts.force) {
    await manifest.load();
    const existing = manifest.stats;
    if (existing.lastCrawl) {
      console.log(`[manifest] Previous crawl: ${existing.lastCrawl} (${existing.totalPages} pages)`);
    }
  }

  // 2. Discover URLs from sitemaps
  console.log("\n[1/4] Discovering URLs from sitemaps...");
  const discovered = await discoverUrls(opts.locale, opts.verbose);
  stats.discovered = discovered.articleUrls.length + discovered.landingUrls.length;
  console.log(
    `  Found ${discovered.articleUrls.length} article URLs (${discovered.totalBeforeFilter} total across all locales)`
  );
  console.log(`  Plus ${discovered.landingUrls.length} landing page seeds`);

  // 3. Filter to URLs that need crawling (skip unchanged if incremental)
  let urlsToCrawl: string[];
  if (opts.force) {
    urlsToCrawl = [...discovered.articleUrls, ...discovered.landingUrls.map((l) => l.url)];
  } else {
    urlsToCrawl = discovered.articleUrls.filter((url) => manifest.needsCrawl(url));
    const landingsToCrawl = discovered.landingUrls.filter((l) => manifest.needsCrawl(l.url));
    urlsToCrawl.push(...landingsToCrawl.map((l) => l.url));
    stats.skipped = stats.discovered - urlsToCrawl.length;
  }

  console.log(`\n[2/4] Work queue: ${urlsToCrawl.length} URLs to fetch (${stats.skipped} skipped — unchanged)`);

  if (opts.dryRun) {
    console.log("\n--- DRY RUN — URLs to crawl: ---");
    for (const url of urlsToCrawl.slice(0, 50)) {
      console.log(`  ${url}`);
    }
    if (urlsToCrawl.length > 50) {
      console.log(`  ... and ${urlsToCrawl.length - 50} more`);
    }
    return stats;
  }

  if (urlsToCrawl.length === 0) {
    console.log("\nNothing to crawl — all pages are up to date.");
    return stats;
  }

  // 4. Fetch all URLs
  console.log(`\n[3/4] Fetching ${urlsToCrawl.length} pages...`);
  const progressInterval = Math.max(1, Math.floor(urlsToCrawl.length / 20));

  const { results, errors: fetchErrors } = await fetchAll(
    urlsToCrawl,
    {
      concurrency: opts.concurrency,
      delayMs: opts.delayMs,
      verbose: opts.verbose,
    },
    (progress: CrawlProgress) => {
      if (progress.completed % progressInterval === 0 || progress.completed === progress.total) {
        const pct = Math.round((progress.completed / progress.total) * 100);
        const elapsed = formatDuration(Date.now() - startTime);
        process.stdout.write(
          `\r  Progress: ${progress.completed}/${progress.total} (${pct}%) | OK: ${progress.successes} | Err: ${progress.failures} | ${elapsed}`
        );
      }
    }
  );
  console.log(""); // newline after progress

  stats.fetched = results.length;
  for (const err of fetchErrors) {
    stats.errors++;
    stats.errorDetails.push({ url: err.url, reason: err.error });
  }

  console.log(`  Fetched: ${results.length} | Failed: ${fetchErrors.length}`);

  // 5. Extract + Convert + Write
  console.log(`\n[4/4] Converting to markdown...`);

  // Build a lookup for landing page slugs
  const landingSlugMap = new Map(discovered.landingUrls.map((l) => [l.url, l.slug]));

  // Track all URLs seen (sitemap + crawled) for frontier deduplication
  const allKnownUrls = new Set(urlsToCrawl);
  // Frontier: article links discovered from page content but not in sitemap
  const frontier = new Set<string>();

  for (const result of results) {
    try {
      const extracted = extractPage(result.html, result.url);

      if (extracted.type === "error") {
        stats.errors++;
        stats.errorDetails.push({ url: result.url, reason: extracted.reason });
        if (opts.verbose) {
          console.log(`  [skip] ${result.url}: ${extracted.reason}`);
        }
        continue;
      }

      let markdown: string;
      let outputPath: string;

      if (extracted.type === "article") {
        markdown = articleToMarkdown(extracted, result.url);
        outputPath = getOutputPath(extracted, opts.outputDir);
      } else {
        // Landing page
        const slug = landingSlugMap.get(result.url) || "index";
        markdown = landingToMarkdown(extracted, result.url);
        outputPath = getLandingOutputPath(slug, opts.outputDir);
      }

      // Write file
      ensureDir(outputPath);
      await Bun.write(outputPath, markdown);

      // Update manifest
      manifest.set(result.url, {
        contentHash: result.contentHash,
        lastFetched: new Date().toISOString(),
        outputPath: outputPath.replace(opts.outputDir + "/", ""),
      });

      stats.converted++;

      if (opts.verbose) {
        console.log(`  [ok] ${outputPath}`);
      }

      // Collect article links for frontier expansion — use cleaned content
      // HTML only (not raw page HTML) to avoid nav/sidebar/related-article links
      // that appear on every page and would cause infinite BFS cycles.
      if (extracted.type === "article") {
        for (const link of extractArticleLinks(extracted.contentHtml, opts.locale)) {
          if (!allKnownUrls.has(link)) frontier.add(link);
        }
      }
    } catch (err: any) {
      stats.errors++;
      stats.errorDetails.push({ url: result.url, reason: err.message });
      if (opts.verbose) {
        console.error(`  [err] ${result.url}: ${err.message}`);
      }
    }
  }

  // 5b. Frontier expansion — BFS over pages linked from sitemapped content
  //     but absent from the sitemap. Runs until no new URLs are discovered.
  if (frontier.size > 0) {
    console.log(`\n[+] Link discovery: ${frontier.size} linked pages not in sitemap — crawling...`);
    let round = 0;
    let currentFrontier = [...frontier];

    while (currentFrontier.length > 0) {
      round++;
      // Only fetch URLs we haven't seen and that need crawling
      const toFetch = currentFrontier.filter(
        (url) => !allKnownUrls.has(url) && (opts.force || manifest.needsCrawl(url))
      );
      for (const url of currentFrontier) allKnownUrls.add(url);

      if (toFetch.length === 0) break;

      console.log(`  Round ${round}: fetching ${toFetch.length} linked pages...`);

      const { results: linkedResults, errors: linkedErrors } = await fetchAll(
        toFetch,
        { concurrency: opts.concurrency, delayMs: opts.delayMs, verbose: opts.verbose }
      );

      for (const err of linkedErrors) {
        stats.errors++;
        stats.errorDetails.push({ url: err.url, reason: err.error });
      }

      const nextFrontier = new Set<string>();

      for (const result of linkedResults) {
        try {
          const extracted = extractPage(result.html, result.url);
          if (extracted.type !== "article") continue;

          const markdown = articleToMarkdown(extracted, result.url);
          const outputPath = getOutputPath(extracted, opts.outputDir);
          ensureDir(outputPath);
          await Bun.write(outputPath, markdown);

          manifest.set(result.url, {
            contentHash: result.contentHash,
            lastFetched: new Date().toISOString(),
            outputPath: outputPath.replace(opts.outputDir + "/", ""),
          });

          stats.converted++;
          stats.linked++;

          if (opts.verbose) console.log(`  [linked] ${outputPath}`);

          // Discover further links from cleaned content only (not raw HTML)
          for (const link of extractArticleLinks(extracted.contentHtml, opts.locale)) {
            if (!allKnownUrls.has(link)) nextFrontier.add(link);
          }
        } catch (err: any) {
          stats.errors++;
          stats.errorDetails.push({ url: result.url, reason: err.message });
        }
      }

      currentFrontier = [...nextFrontier];
    }

    console.log(`  Link discovery complete: ${stats.linked} additional pages crawled`);
  }

  // 6. Save manifest
  await manifest.save();

  // 7. Summary
  const elapsed = formatDuration(Date.now() - startTime);
  console.log("\n=== Crawl Complete ===");
  console.log(`  Duration:   ${elapsed}`);
  console.log(`  Discovered: ${stats.discovered} (sitemap)`);
  console.log(`  Linked:     ${stats.linked} (via link extraction)`);
  console.log(`  Fetched:    ${stats.fetched}`);
  console.log(`  Converted:  ${stats.converted}`);
  console.log(`  Skipped:    ${stats.skipped} (unchanged)`);
  console.log(`  Errors:     ${stats.errors}`);

  if (stats.errorDetails.length > 0 && !opts.verbose) {
    console.log(`\n  First 10 errors:`);
    for (const err of stats.errorDetails.slice(0, 10)) {
      console.log(`    ${err.url}: ${err.reason}`);
    }
    if (stats.errorDetails.length > 10) {
      console.log(`    ... and ${stats.errorDetails.length - 10} more`);
    }
  }

  console.log(`\n  Output: ${opts.outputDir}/`);
  console.log(`  Manifest: ${manifestPath}`);
  console.log(`  Use with treenav-mcp: DOCS_ROOT=${opts.outputDir} bun run serve`);

  return stats;
}
