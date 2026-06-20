import { SparkleIcon, TrashIcon } from "../../components/icons";
import type { Artifact } from "../../lib/store";

interface ArtifactCardProps {
  artifact: Artifact;
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
}

function timeAgo(ts: number): string {
  const mins = Math.round((Date.now() - ts) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.round(hrs / 24)}d ago`;
}

export function ArtifactCard({ artifact, onOpen, onDelete }: ArtifactCardProps) {
  return (
    <div className="card">
      <button className="card__open" onClick={() => onOpen(artifact.id)}>
        <span className="card__thumb" aria-hidden>
          <SparkleIcon width={28} height={28} />
          <span className="card__badge">Board</span>
        </span>
        <span className="card__body">
          <span className="card__title">{artifact.title}</span>
          <span className="card__meta">Edited {timeAgo(artifact.updatedAt)}</span>
        </span>
      </button>
      <button
        type="button"
        className="card__delete"
        aria-label="Delete board"
        title="Delete"
        onClick={() => onDelete(artifact.id)}
      >
        <TrashIcon width={16} height={16} />
      </button>
    </div>
  );
}
