import { useEffect, useState } from "react";
import type { Editor } from "tldraw";
import { Board } from "../board/Board";
import { Chrome } from "../chrome/Chrome";
import { WidgetGenerator } from "../widget/WidgetGenerator";
import { localArtifactStore as store } from "../../lib/store";
import "../chrome/chrome.css";

interface BoardViewProps {
  boardId: string;
  onBack: () => void;
}

export function BoardView({ boardId, onBack }: BoardViewProps) {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [title, setTitle] = useState("Untitled Board");

  useEffect(() => {
    store.get(boardId).then((a) => a && setTitle(a.title));
  }, [boardId]);

  const handleTitleChange = (next: string) => {
    setTitle(next);
    store.rename(boardId, next);
  };

  return (
    <div className="app">
      <Board boardId={boardId} onMount={setEditor} />
      {editor && (
        <>
          <Chrome editor={editor} title={title} onTitleChange={handleTitleChange} onBack={onBack} />
          <WidgetGenerator editor={editor} />
        </>
      )}
    </div>
  );
}
