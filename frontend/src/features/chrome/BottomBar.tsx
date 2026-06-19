import { IconButton } from "../../components/IconButton";
import { MinusIcon, PlusIcon } from "../../components/icons";

interface BottomBarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
}

export function BottomBar({ zoom, onZoomIn, onZoomOut, onZoomReset }: BottomBarProps) {
  return (
    <div className="bottombar">
      <div className="zoom-pill">
        <IconButton label="Zoom out" size={36} onClick={onZoomOut}>
          <MinusIcon width={20} height={20} />
        </IconButton>
        <button type="button" className="zoom-pill__value" onClick={onZoomReset}>
          {Math.round(zoom * 100)}%
        </button>
        <IconButton label="Zoom in" size={36} onClick={onZoomIn}>
          <PlusIcon width={20} height={20} />
        </IconButton>
      </div>
    </div>
  );
}
