#!/usr/bin/env bash
# Sync Webex documentation corpus from webex-crawler into treenav-service/docs/
#
# Usage: ./scripts/sync-docs.sh [--dry-run]
#
# Source: webex-crawler/webex-docs/ (run `cd webex-crawler && bun run crawl` first)
# Dest:   treenav-service/docs/

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SRC="${WEBEX_DOCS_PATH:-$REPO_ROOT/webex-crawler/webex-docs}"
DEST="$REPO_ROOT/treenav-service/docs"

if [[ ! -d "$SRC" ]]; then
  echo "Error: source not found at $SRC"
  echo "Set WEBEX_DOCS_PATH to override."
  exit 1
fi

DRY_RUN=""
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN="--dry-run"
  echo "Dry run — no changes will be made."
fi

echo "Syncing: $SRC → $DEST"
rsync -av --delete $DRY_RUN "$SRC/" "$DEST/"
echo "Done."
