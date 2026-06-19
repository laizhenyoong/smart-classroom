import { TOOLS, type ToolDef } from "../../lib/tools";
import { ToolButton } from "./ToolButton";

interface ToolbarProps {
  activeTool: string;
  onSelectTool: (tool: ToolDef) => void;
}

export function Toolbar({ activeTool, onSelectTool }: ToolbarProps) {
  return (
    <div className="toolbar" role="toolbar" aria-label="Drawing tools">
      {TOOLS.map((tool) => (
        <ToolButton
          key={tool.id}
          tool={tool}
          active={activeTool === tool.id}
          onSelect={onSelectTool}
        />
      ))}
    </div>
  );
}
