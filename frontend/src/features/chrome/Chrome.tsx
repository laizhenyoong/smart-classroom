import { useCallback } from "react";
import { type Editor, useValue } from "tldraw";
import { TopBar } from "./TopBar";
import { Toolbar } from "./Toolbar";
import { BottomBar } from "./BottomBar";
import type { ToolDef } from "../../lib/tools";

interface ChromeProps {
  editor: Editor;
  title: string;
  onTitleChange: (title: string) => void;
}

export function Chrome({ editor, title, onTitleChange }: ChromeProps) {
  const activeTool = useValue("current tool", () => editor.getCurrentToolId(), [editor]);
  const zoom = useValue("zoom", () => editor.getZoomLevel(), [editor]);
  const canUndo = useValue("can undo", () => editor.getCanUndo(), [editor]);
  const canRedo = useValue("can redo", () => editor.getCanRedo(), [editor]);

  const handleSelectTool = useCallback(
    (tool: ToolDef) => {
      editor.setCurrentTool(tool.tldrawTool);
    },
    [editor],
  );

  return (
    <>
      <TopBar
        title={title}
        onTitleChange={onTitleChange}
        onUndo={() => editor.undo()}
        onRedo={() => editor.redo()}
        canUndo={canUndo}
        canRedo={canRedo}
      />
      <Toolbar activeTool={activeTool} onSelectTool={handleSelectTool} />
      <BottomBar
        zoom={zoom}
        onZoomIn={() => editor.zoomIn()}
        onZoomOut={() => editor.zoomOut()}
        onZoomReset={() => editor.resetZoom()}
      />
    </>
  );
}
