import { useState, type FormEvent, type KeyboardEvent } from "react";

interface InputBarProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

export function InputBar({ onSend, disabled }: InputBarProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t p-4"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-3xl gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about your documentation..."
          disabled={disabled}
          rows={1}
          className="flex-1 resize-none rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2"
          style={{
            borderColor: "var(--border)",
            focusRingColor: "var(--primary)",
          }}
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-50"
          style={{ backgroundColor: "var(--primary)" }}
        >
          Send
        </button>
      </div>
    </form>
  );
}
