#!/usr/bin/env bash
#
# health-check.sh — Check health of all DocNav services
#
# Usage:
#   ./scripts/health-check.sh [base_url]
#
# Examples:
#   ./scripts/health-check.sh                           # localhost
#   ./scripts/health-check.sh https://aegra-myproject.up.railway.app

set -euo pipefail

AEGRA_URL="${1:-http://localhost:8000}"
DOCTREE_URL="${2:-http://localhost:3001}"

echo "=== DocNav Health Check ==="
echo ""

# Check Aegra
echo "[Aegra] ${AEGRA_URL}/health"
AEGRA_HEALTH=$(curl -sf --max-time 5 "${AEGRA_URL}/health" 2>/dev/null || echo "UNREACHABLE")
if echo "${AEGRA_HEALTH}" | grep -q '"ok"'; then
    echo "  Status: OK"
else
    echo "  Status: FAILED (${AEGRA_HEALTH})"
fi

echo ""

# Check doctree-mcp
echo "[doctree-mcp] ${DOCTREE_URL}/health"
DOCTREE_HEALTH=$(curl -sf --max-time 5 "${DOCTREE_URL}/health" 2>/dev/null || echo "UNREACHABLE")
if echo "${DOCTREE_HEALTH}" | grep -q '"ok"'; then
    echo "  Status: OK"
else
    echo "  Status: FAILED (${DOCTREE_HEALTH})"
fi

echo ""
echo "=== Done ==="
