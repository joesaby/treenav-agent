/**
 * Incremental crawl manifest — tracks crawled URLs, content hashes, and output paths.
 * Enables skipping unchanged pages on re-crawl.
 */

export interface ManifestEntry {
  contentHash: string;
  lastFetched: string;
  outputPath: string;
}

export interface ManifestData {
  lastCrawl: string;
  totalPages: number;
  pages: Record<string, ManifestEntry>;
}

const EMPTY_MANIFEST: ManifestData = {
  lastCrawl: "",
  totalPages: 0,
  pages: {},
};

export class CrawlManifest {
  private data: ManifestData;
  private filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.data = { ...EMPTY_MANIFEST, pages: {} };
  }

  /** Load manifest from disk. Returns empty manifest if file doesn't exist. */
  async load(): Promise<void> {
    try {
      const file = Bun.file(this.filePath);
      if (await file.exists()) {
        this.data = await file.json();
      }
    } catch {
      // Corrupt or missing — start fresh
      this.data = { ...EMPTY_MANIFEST, pages: {} };
    }
  }

  /** Save manifest to disk. */
  async save(): Promise<void> {
    this.data.lastCrawl = new Date().toISOString();
    this.data.totalPages = Object.keys(this.data.pages).length;
    await Bun.write(this.filePath, JSON.stringify(this.data, null, 2));
  }

  /** Check if a URL needs re-crawling based on content hash. */
  needsCrawl(url: string, contentHash?: string): boolean {
    const entry = this.data.pages[url];
    if (!entry) return true;
    if (contentHash && entry.contentHash !== contentHash) return true;
    return false;
  }

  /** Get the existing entry for a URL, if any. */
  getEntry(url: string): ManifestEntry | undefined {
    return this.data.pages[url];
  }

  /** Record a crawled page. */
  set(url: string, entry: ManifestEntry): void {
    this.data.pages[url] = entry;
  }

  /** Remove a URL from the manifest (e.g., page no longer in sitemap). */
  remove(url: string): void {
    delete this.data.pages[url];
  }

  /** Get all previously crawled URLs. */
  get urls(): string[] {
    return Object.keys(this.data.pages);
  }

  get stats(): { totalPages: number; lastCrawl: string } {
    return {
      totalPages: Object.keys(this.data.pages).length,
      lastCrawl: this.data.lastCrawl,
    };
  }
}
