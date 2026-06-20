import { useCallback } from "react";
import { DefaultColorStyle, type Editor, useValue } from "tldraw";
import { TopBar } from "./TopBar";
import { Toolbar } from "./Toolbar";
import { ColorPicker } from "./ColorPicker";
import { BottomBar } from "./BottomBar";
import type { ToolDef } from "../../lib/tools";
import type { ColorDef } from "../../lib/colors";

interface ChromeProps {
  editor: Editor;
  title: string;
  onTitleChange: (title: string) => void;
  onBack: () => void;
}

export function Chrome({ editor, title, onTitleChange, onBack }: ChromeProps) {
  const activeTool = useValue("current tool", () => editor.getCurrentToolId(), [editor]);
  const activeColor = useValue("color", () => editor.getStyleForNextShape(DefaultColorStyle), [editor]);
  const zoom = useValue("zoom", () => editor.getZoomLevel(), [editor]);
  const canUndo = useValue("can undo", () => editor.getCanUndo(), [editor]);
  const canRedo = useValue("can redo", () => editor.getCanRedo(), [editor]);

  const handleSelectTool = useCallback(
    (tool: ToolDef) => {
      editor.setCurrentTool(tool.tldrawTool);
    },
    [editor],
  );

  const handleSelectColor = useCallback(
    (color: ColorDef) => {
      editor.setStyleForNextShapes(DefaultColorStyle, color.id);
      editor.setStyleForSelectedShapes(DefaultColorStyle, color.id);
    },
    [editor],
  );

  // Confirm to avoid accidental wipe mid-demo; still undoable.
  const handleClear = useCallback(() => {
    const ids = editor.getCurrentPageShapeIds();
    if (ids.size === 0) return;
    if (!window.confirm("Clear the whole board?")) return;
    editor.deleteShapes([...ids]);
  }, [editor]);

  return (
    <>
      <TopBar
        title={title}
        onTitleChange={onTitleChange}
        onBack={onBack}
        onUndo={() => editor.undo()}
        onRedo={() => editor.redo()}
        canUndo={canUndo}
        canRedo={canRedo}
        onClear={handleClear}
      />
      <Toolbar activeTool={activeTool} onSelectTool={handleSelectTool} />
      <ColorPicker activeColor={activeColor} onSelectColor={handleSelectColor} />
      <BottomBar
        zoom={zoom}
        onZoomIn={() => editor.zoomIn()}
        onZoomOut={() => editor.zoomOut()}
        onZoomReset={() => editor.resetZoom()}
      />
    </>
  );
}
