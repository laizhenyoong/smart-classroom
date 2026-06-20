import type { ReactNode } from "react";
import type { ArtifactType } from "../../lib/store";
import { BoardsIcon } from "../../components/icons";

// The [+] New menu is data-driven: add an entry here to offer a new creation
// choice. `enabled: false` shows it as a teaser ("coming soon") without wiring.
export interface CreateOption {
  type: ArtifactType | string;
  label: string;
  description: string;
  icon: ReactNode;
  enabled: boolean;
}

export const CREATE_OPTIONS: CreateOption[] = [
  {
    type: "board",
    label: "Board",
    description: "Your infinite whiteboard",
    icon: <BoardsIcon width={20} height={20} />,
    enabled: true,
  },
];
