import { IconButton } from "../../components/IconButton";
import { RedoIcon, SparkleIcon, TrashIcon, UndoIcon } from "../../components/icons";

interface TopBarProps {
  title: string;
  onTitleChange: (title: string) => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onClear: () => void;
}

export function TopBar({
  title,
  onTitleChange,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onClear,
}: TopBarProps) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <span className="topbar__brand" aria-hidden>
          <SparkleIcon width={18} height={18} />
        </span>
        <input
          className="topbar__title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          aria-label="Board title"
          spellCheck={false}
        />
      </div>

      <div className="topbar__right">
        <IconButton label="Undo" onClick={onUndo} disabled={!canUndo}>
          <UndoIcon />
        </IconButton>
        <IconButton label="Redo" onClick={onRedo} disabled={!canRedo}>
          <RedoIcon />
        </IconButton>
        <span className="topbar__divider" aria-hidden />
        <IconButton label="Clear board" onClick={onClear}>
          <TrashIcon />
        </IconButton>
      </div>
    </header>
  );
}
