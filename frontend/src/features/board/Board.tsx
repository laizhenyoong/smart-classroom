import { Tldraw, type Editor } from "tldraw";
import "tldraw/tldraw.css";
import { WidgetShapeUtil } from "../widget/WidgetShape";
import "../widget/widget.css";

const shapeUtils = [WidgetShapeUtil];

interface BoardProps {
  onMount: (editor: Editor) => void;
}

// tldraw's own UI is hidden so our custom chrome can drive the canvas.
export function Board({ onMount }: BoardProps) {
  return (
    <div className="board">
      <Tldraw hideUi shapeUtils={shapeUtils} onMount={onMount} />
    </div>
  );
}
