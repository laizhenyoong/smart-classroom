import { Tldraw, type Editor } from "tldraw";
import "tldraw/tldraw.css";

interface BoardProps {
  onMount: (editor: Editor) => void;
}

// tldraw's own UI is hidden so our custom glass chrome can drive the canvas.
export function Board({ onMount }: BoardProps) {
  return (
    <div className="board">
      <Tldraw hideUi onMount={onMount} />
    </div>
  );
}
