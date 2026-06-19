import type { ToolDef } from "../../lib/tools";

interface ToolButtonProps {
  tool: ToolDef;
  active: boolean;
  onSelect: (tool: ToolDef) => void;
}

export function ToolButton({ tool, active, onSelect }: ToolButtonProps) {
  const { icon: Icon, label, shortcut } = tool;
  return (
    <button
      type="button"
      className={`tool-button${active ? " is-active" : ""}`}
      aria-label={label}
      aria-pressed={active}
      title={shortcut ? `${label} (${shortcut})` : label}
      onClick={() => onSelect(tool)}
    >
      <Icon />
    </button>
  );
}
