import { useEffect, useRef, useState } from "react";

interface GeneratePanelProps {
  screen: { x: number; y: number };
  onSubmit: (prompt: string) => void;
  onClose: () => void;
}

export function GeneratePanel({ screen, onSubmit, onClose }: GeneratePanelProps) {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function submit() {
    const trimmed = prompt.trim();
    if (trimmed) onSubmit(trimmed);
  }

  return (
    <>
      <div className="generate-panel__backdrop" onPointerDown={onClose} />
      <div
        className="generate-panel"
        style={{ left: screen.x, top: screen.y }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="generate-panel__input"
          value={prompt}
          placeholder="Describe a widget to generate…"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
            if (e.key === "Escape") onClose();
          }}
        />
        <button
          type="button"
          className="generate-panel__submit"
          disabled={!prompt.trim()}
          onClick={submit}
        >
          Generate
        </button>
      </div>
    </>
  );
}
