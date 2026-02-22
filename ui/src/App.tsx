import { useState } from "react";
import { ChatWindow } from "./components/ChatWindow";
import { InputBar } from "./components/InputBar";
import { NavigationTrace } from "./components/NavigationTrace";
import { useDocNav } from "./hooks/useDocNav";

// Runtime config injected by Aegra (per-customer branding)
declare global {
  interface Window {
    __CONFIG__?: {
      brandName?: string;
      primaryColor?: string;
      logoUrl?: string;
    };
  }
}

const config = window.__CONFIG__ || {};
const brandName = config.brandName || import.meta.env.VITE_BRAND_NAME || "DocNav";

function App() {
  const { messages, traces, isStreaming, sendMessage } = useDocNav();
  const [showTrace, setShowTrace] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header
        className="flex items-center justify-between border-b px-6 py-3"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-3">
          {config.logoUrl && (
            <img src={config.logoUrl} alt={brandName} className="h-8 w-8" />
          )}
          <h1 className="text-lg font-semibold">{brandName}</h1>
        </div>
        <button
          onClick={() => setShowTrace(!showTrace)}
          className="rounded-md border px-3 py-1 text-sm transition-colors hover:bg-gray-50"
          style={{ borderColor: "var(--border)" }}
        >
          {showTrace ? "Hide" : "Show"} Navigation Trace
        </button>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chat area */}
        <div className="flex flex-1 flex-col">
          <ChatWindow messages={messages} isStreaming={isStreaming} />
          <InputBar onSend={sendMessage} disabled={isStreaming} />
        </div>

        {/* Trace panel */}
        {showTrace && (
          <aside
            className="w-80 overflow-y-auto border-l p-4"
            style={{ borderColor: "var(--border)" }}
          >
            <NavigationTrace traces={traces} />
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;
