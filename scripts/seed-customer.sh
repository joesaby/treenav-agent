#!/usr/bin/env bash
#
# seed-customer.sh — Onboard a new customer to DocNav (Railway / Phase 1)
#
# Usage:
#   ./scripts/seed-customer.sh <customer_id> <brand_name> <aegra_url>
#
# Example:
#   ./scripts/seed-customer.sh acme "Acme Docs Assistant" https://aegra-myproject.up.railway.app

set -euo pipefail

CUSTOMER_ID="${1:?Usage: seed-customer.sh <customer_id> <brand_name> <aegra_url>}"
BRAND_NAME="${2:?Usage: seed-customer.sh <customer_id> <brand_name> <aegra_url>}"
AEGRA_URL="${3:?Usage: seed-customer.sh <customer_id> <brand_name> <aegra_url>}"

echo "=== DocNav Customer Onboarding ==="
echo "Customer ID:  ${CUSTOMER_ID}"
echo "Brand Name:   ${BRAND_NAME}"
echo "Aegra URL:    ${AEGRA_URL}"
echo ""

# 1. Check health
echo "[1/3] Checking Aegra health..."
HEALTH=$(curl -sf "${AEGRA_URL}/health" || echo '{"status":"error"}')
echo "  Health: ${HEALTH}"

if echo "${HEALTH}" | grep -q '"ok"'; then
    echo "  Aegra is healthy."
else
    echo "  ERROR: Aegra is not healthy. Aborting."
    exit 1
fi

# 2. Create assistant for this customer
echo ""
echo "[2/3] Creating assistant for customer '${CUSTOMER_ID}'..."
ASSISTANT=$(curl -sf -X POST "${AEGRA_URL}/assistants" \
    -H "Content-Type: application/json" \
    -d "{
        \"graph_id\": \"docnav\",
        \"config\": {
            \"configurable\": {
                \"customer_id\": \"${CUSTOMER_ID}\"
            }
        }
    }")
echo "  Assistant: ${ASSISTANT}"

# 3. Verify
echo ""
echo "[3/3] Verifying..."
ASSISTANT_ID=$(echo "${ASSISTANT}" | python3 -c "import sys,json; print(json.load(sys.stdin).get('assistant_id','unknown'))" 2>/dev/null || echo "unknown")
echo "  Assistant ID: ${ASSISTANT_ID}"

echo ""
echo "=== Onboarding Complete ==="
echo ""
echo "Next steps:"
echo "  1. Upload customer docs to doctree-mcp volume or S3"
echo "  2. Point customer domain to Railway UI service (CNAME)"
echo "  3. Share the UI URL with the customer"
