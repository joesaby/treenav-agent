/**
 * doctree-mcp HTTP server entrypoint.
 *
 * Starts the doctree-mcp MCP server with Streamable HTTP transport
 * so Aegra can call document tree navigation tools over the network.
 */

const { spawn } = require("child_process");
const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 3001;
const DOCS_SOURCE = process.env.DOCS_SOURCE || "filesystem";
const DOCS_PATH = process.env.DOCS_PATH || path.join(__dirname, "docs");

// Health check server — responds on /health, proxies everything else
// to the MCP process once it's ready.
let mcpReady = false;

const healthServer = http.createServer((req, res) => {
  if (req.url === "/health") {
    if (mcpReady) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", service: "doctree-mcp" }));
    } else {
      res.writeHead(503, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "starting", service: "doctree-mcp" }));
    }
    return;
  }

  // For non-health requests, return 404 — MCP traffic goes to the MCP port
  res.writeHead(404);
  res.end("Not found. MCP endpoint is at /mcp");
});

// Start doctree-mcp as a child process with HTTP transport
const mcpBin = path.join(
  __dirname,
  "node_modules",
  ".bin",
  "doctree-mcp-http"
);

const env = {
  ...process.env,
  DOCS_SOURCE,
  DOCS_PATH,
  PORT: String(PORT),
};

console.log(`[doctree-service] Starting doctree-mcp server...`);
console.log(`[doctree-service] DOCS_SOURCE=${DOCS_SOURCE}`);
console.log(`[doctree-service] DOCS_PATH=${DOCS_PATH}`);
console.log(`[doctree-service] PORT=${PORT}`);

// Try to start the MCP server binary; fall back to npx if not found
const mcpProcess = spawn("npx", ["doctree-mcp", "--transport", "http"], {
  env,
  stdio: ["pipe", "pipe", "pipe"],
  cwd: __dirname,
});

mcpProcess.stdout.on("data", (data) => {
  const msg = data.toString();
  console.log(`[doctree-mcp] ${msg}`);
  if (msg.includes("listening") || msg.includes("started") || msg.includes("ready")) {
    mcpReady = true;
  }
});

mcpProcess.stderr.on("data", (data) => {
  console.error(`[doctree-mcp:err] ${data.toString()}`);
});

mcpProcess.on("error", (err) => {
  console.error(`[doctree-service] Failed to start doctree-mcp: ${err.message}`);
  process.exit(1);
});

mcpProcess.on("exit", (code) => {
  console.error(`[doctree-service] doctree-mcp exited with code ${code}`);
  process.exit(code || 1);
});

// Mark ready after a brief startup delay as fallback
setTimeout(() => {
  mcpReady = true;
}, 5000);

// Start health check on a separate port if MCP uses the main port
// For simplicity, use the same port — doctree-mcp will handle /mcp routes
healthServer.listen(PORT, "0.0.0.0", () => {
  console.log(`[doctree-service] Health server listening on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("[doctree-service] SIGTERM received, shutting down...");
  mcpProcess.kill("SIGTERM");
  healthServer.close();
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("[doctree-service] SIGINT received, shutting down...");
  mcpProcess.kill("SIGINT");
  healthServer.close();
  process.exit(0);
});
