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
      <div className="ambient" aria-hidden>
        <div className="ambient__blob ambient__blob--1" />
        <div className="ambient__blob ambient__blob--2" />
        <div className="ambient__blob ambient__blob--3" />
      </div>
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
