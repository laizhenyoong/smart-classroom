import { useState } from "react";
import { BoardView } from "./features/board/BoardView";
import { Dashboard } from "./features/dashboard/Dashboard";

// A board id means we're in that board; null means the dashboard.
export default function App() {
  const [boardId, setBoardId] = useState<string | null>(null);

  if (boardId) {
    return <BoardView boardId={boardId} onBack={() => setBoardId(null)} />;
  }
  return <Dashboard onOpenBoard={setBoardId} />;
}
