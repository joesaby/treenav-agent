# Webex Help Center Crawler — Design

**Date:** 2026-02-28
**Approach:** Sitemap-driven, incremental, Bun-native standalone script

## Goal

Crawl all English documentation from help.webex.com, convert to markdown with frontmatter, and output files organized by product. The output directory is consumed by treenav-mcp via `DOCS_ROOT`.

## Architecture

```
scripts/crawl-webex.ts            (CLI entry point)
  src/crawler/
  ├── sitemap.ts       (sitemap index + gzip decompression + URL extraction)
  ├── fetcher.ts       (HTTP fetch with concurrency, rate limiting, retries)
  ├── extractor.ts     (HTML → article content extraction via CSS selectors)
  ├── converter.ts     (HTML → markdown with frontmatter)
  ├── landing.ts       (landing/index page handler — What's New, product hubs)
  └── manifest.ts      (incremental crawl manifest — URL + content hash)
```

## Data Flow

1. **Discover** — Fetch `sitemap.xml` → download 29 `sitemapN.xml.gz` → decompress → parse XML → collect URLs → filter to `en-us` locale. Add known landing pages as seeds.
2. **Diff** — Load `crawl-manifest.json` → compare against previous crawl → build work queue of new/changed pages.
3. **Fetch** — Bounded concurrency (default 5) + 200ms politeness delay + exponential backoff on 429/5xx.
4. **Extract** — Detect page type: `article` vs `landing`. Articles: extract `article-content` container, strip nav/footer/sidebar/feedback. Landing pages: extract tab structure and link lists.
5. **Convert** — Articles → markdown with YAML frontmatter (title, product, last_updated, article_id, url). Landing pages → markdown index.
6. **Write** — `{output}/{product}/{article-id}.md` for articles. `{output}/_index/whats-new.md` for landing pages. Update manifest.

## Output Structure

```
webex-docs/
├── crawl-manifest.json
├── _index/
│   └── whats-new.md
├── webex-meetings/
│   ├── WBX264.md
│   └── n62wi3c.md
├── webex-app/
│   └── ...
├── webex-calling/
│   └── ...
└── administration/
    └── ...
```

## CLI Interface

```bash
bun run scripts/crawl-webex.ts --output ./webex-docs
bun run scripts/crawl-webex.ts --output ./webex-docs --dry-run
bun run scripts/crawl-webex.ts --output ./webex-docs --force
```

| Flag | Default | Description |
|------|---------|-------------|
| `--output`, `-o` | `./webex-docs` | Output directory |
| `--concurrency`, `-c` | `5` | Max parallel HTTP requests |
| `--delay`, `-d` | `200` | Ms between requests |
| `--dry-run` | `false` | List URLs without fetching |
| `--force` | `false` | Ignore manifest, re-crawl all |
| `--locale` | `en-us` | Sitemap locale filter |
| `--verbose`, `-v` | `false` | Log each URL |

## Manifest Format

```json
{
  "lastCrawl": "2026-02-28T10:30:00Z",
  "totalPages": 4230,
  "pages": {
    "https://help.webex.com/en-us/article/WBX264/...": {
      "contentHash": "a1b2c3d4",
      "lastFetched": "2026-02-28T10:30:00Z",
      "outputPath": "webex-meetings/WBX264.md"
    }
  }
}
```

## Markdown Output Format

```markdown
---
title: "How Do I Record a Webex Meeting?"
product: "Webex Meetings"
article_id: "WBX264"
url: "https://help.webex.com/en-us/article/WBX264/..."
last_updated: "2025-12-04"
tags: [webex-meetings, recording]
source: "help.webex.com"
---

# How Do I Record a Webex Meeting?

[article content as markdown...]
```

## Dependencies

- `node-html-markdown` — HTML to markdown conversion (Bun-compatible)
- Native `fetch()` — HTTP requests
- `Bun.gunzipSync()` — sitemap decompression
- `Bun.hash()` — content hashing for incremental crawl
- Regex XML parsing — sitemaps are simple `<loc>` lists

## Decisions

- **Sitemap-driven** over recursive link crawling — complete, reliable, simpler
- **Incremental** via content hash manifest — essential for ~4000+ page site
- **Bun-native** — consistent with project, uses Bun.gunzipSync, Bun.hash, native fetch
- **Standalone script** — decoupled from MCP server, outputs files for DOCS_ROOT
