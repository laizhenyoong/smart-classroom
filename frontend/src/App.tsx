import { useState } from "react";
import type { Editor } from "tldraw";
import { Board } from "./features/board/Board";
import { Chrome } from "./features/chrome/Chrome";
import "./features/chrome/chrome.css";

export default function App() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [title, setTitle] = useState("Untitled Board");

  return (
    <div className="app">
      <Board onMount={setEditor} />
      {editor && (
        <Chrome
          editor={editor}
          title={title}
          onTitleChange={setTitle}
        />
      )}
    </div>
  );
}
