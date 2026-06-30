#!/usr/bin/env bun
/**
 * CLI entry point for the Webex Help Center crawler.
 *
 * Usage:
 *   bun run scripts/crawl-webex.ts --output ./webex-docs
 *   bun run scripts/crawl-webex.ts --output ./webex-docs --dry-run
 *   bun run scripts/crawl-webex.ts --output ./webex-docs --force --verbose
 *   bun run scripts/crawl-webex.ts --help
 */

import { crawl, DEFAULT_CRAWL_OPTIONS } from "../src/crawler/index";

function printHelp(): void {
  console.log(`
Webex Help Center Crawler — Sitemap-driven documentation crawler

Crawls all English help articles from help.webex.com, converts them to
markdown with YAML frontmatter, and writes them to an output directory.
The output can be consumed by treenav-mcp via DOCS_ROOT.

USAGE:
  bun run scripts/crawl-webex.ts [OPTIONS]

OPTIONS:
  -o, --output <dir>     Output directory (default: ${DEFAULT_CRAWL_OPTIONS.outputDir})
  -c, --concurrency <n>  Max parallel requests (default: ${DEFAULT_CRAWL_OPTIONS.concurrency})
  -d, --delay <ms>       Delay between requests in ms (default: ${DEFAULT_CRAWL_OPTIONS.delayMs})
      --locale <code>    Locale to filter (default: ${DEFAULT_CRAWL_OPTIONS.locale})
      --dry-run          List URLs without fetching or writing
      --force            Ignore manifest, re-crawl everything
  -v, --verbose          Log every URL as it's processed
  -h, --help             Show this help message

EXAMPLES:
  # First run — full crawl
  bun run scripts/crawl-webex.ts -o ./webex-docs

  # Incremental update (skips unchanged pages)
  bun run scripts/crawl-webex.ts -o ./webex-docs

  # See what would be crawled
  bun run scripts/crawl-webex.ts -o ./webex-docs --dry-run

  # Use with treenav-mcp
  DOCS_ROOT=./webex-docs bun run serve
`);
}

function parseArgs(args: string[]) {
  const options: Record<string, string | boolean> = {};
  let i = 0;
  while (i < args.length) {
    const arg = args[i];
    switch (arg) {
      case "-o":
      case "--output":
        options.output = args[++i];
        break;
      case "-c":
      case "--concurrency":
        options.concurrency = args[++i];
        break;
      case "-d":
      case "--delay":
        options.delay = args[++i];
        break;
      case "--locale":
        options.locale = args[++i];
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--force":
        options.force = true;
        break;
      case "-v":
      case "--verbose":
        options.verbose = true;
        break;
      case "-h":
      case "--help":
        options.help = true;
        break;
      default:
        console.error(`Unknown option: ${arg}`);
        process.exit(1);
    }
    i++;
  }
  return options;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  try {
    const stats = await crawl({
      outputDir: (args.output as string) || DEFAULT_CRAWL_OPTIONS.outputDir,
      concurrency: args.concurrency ? parseInt(args.concurrency as string, 10) : DEFAULT_CRAWL_OPTIONS.concurrency,
      delayMs: args.delay ? parseInt(args.delay as string, 10) : DEFAULT_CRAWL_OPTIONS.delayMs,
      locale: (args.locale as string) || DEFAULT_CRAWL_OPTIONS.locale,
      dryRun: !!args.dryRun,
      force: !!args.force,
      verbose: !!args.verbose,
    });

    // Exit with error code if there were more errors than successes
    if (stats.errors > stats.converted && stats.converted === 0) {
      process.exit(1);
    }
  } catch (err: any) {
    console.error(`\nFatal error: ${err.message}`);
    if (err.stack) console.error(err.stack);
    process.exit(1);
  }
}

main();
