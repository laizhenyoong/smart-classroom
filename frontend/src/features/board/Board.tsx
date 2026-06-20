import { Tldraw, type Editor } from "tldraw";
import "tldraw/tldraw.css";
import { WidgetShapeUtil } from "../widget/WidgetShape";
import "../widget/widget.css";

const shapeUtils = [WidgetShapeUtil];

interface BoardProps {
  boardId: string;
  onMount: (editor: Editor) => void;
}

// tldraw's own UI is hidden so our custom chrome can drive the canvas.
// persistenceKey scopes each board's contents to its own local store.
export function Board({ boardId, onMount }: BoardProps) {
  return (
    <div className="board">
      <Tldraw
        hideUi
        shapeUtils={shapeUtils}
        persistenceKey={`board-${boardId}`}
        onMount={onMount}
      />
    </div>
  );
}
