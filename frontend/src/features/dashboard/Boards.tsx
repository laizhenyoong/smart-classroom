import { useEffect, useState } from "react";
import { SparkleIcon } from "../../components/icons";
import { type Artifact, localArtifactStore as store } from "../../lib/store";
import { ArtifactCard } from "./ArtifactCard";
import { NewMenu } from "./NewMenu";

interface BoardsProps {
  onOpenBoard: (id: string) => void;
}

export function Boards({ onOpenBoard }: BoardsProps) {
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);

  useEffect(() => {
    store.list().then(setArtifacts);
  }, []);

  // Only boards exist today; create one, then jump straight into it.
  const handleCreate = async (type: string) => {
    if (type !== "board") return;
    const artifact = await store.create("board", "Untitled Board");
    onOpenBoard(artifact.id);
  };

  const handleDelete = async (id: string) => {
    await store.remove(id);
    setArtifacts(await store.list());
  };

  return (
    <>
      <header className="dashboard__header">
        <h1 className="dashboard__title">Your boards</h1>
        <NewMenu onCreate={handleCreate} />
      </header>

      {artifacts.length === 0 ? (
        <div className="dashboard__empty">
          <span className="dashboard__empty-icon" aria-hidden>
            <SparkleIcon width={32} height={32} />
          </span>
          <p className="dashboard__empty-title">No boards yet</p>
          <p className="dashboard__empty-text">Create a board to start building AI-powered widgets.</p>
        </div>
      ) : (
        <div className="dashboard__grid">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} artifact={a} onOpen={onOpenBoard} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
}
