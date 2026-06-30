#!/usr/bin/env bash
# Crawl help.webex.com into webex-docs/ at the repo root.
#
# Usage: ./scripts/crawl-docs.sh [--dry-run] [--force] [--verbose]
#
# Output: webex-docs/ (gitignored, local only)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
OUTPUT="$REPO_ROOT/webex-docs"

cd "$REPO_ROOT/webex-crawler"
if [[ ! -d node_modules ]]; then
  bun install
fi

exec bun run scripts/crawl-webex.ts -o "$OUTPUT" "$@"
