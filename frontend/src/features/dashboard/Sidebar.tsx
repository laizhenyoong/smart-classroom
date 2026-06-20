import type { ReactNode } from "react";
import { BoardsIcon, HomeIcon, LogoIcon } from "../../components/icons";

interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
}

// Nav is a config array so adding a section later is a one-line change.
const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: <HomeIcon width={20} height={20} /> },
  { id: "boards", label: "Boards", icon: <BoardsIcon width={20} height={20} /> },
];

interface SidebarProps {
  active: string;
  onSelect: (id: string) => void;
}

export function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__logo" aria-hidden>
          <LogoIcon width={20} height={20} />
        </span>
        <span className="sidebar__name">Smart Classroom</span>
      </div>

      <nav className="sidebar__nav">
        {NAV.map((item) => (
          <button
            key={item.id}
            className={`sidebar__item${active === item.id ? " is-active" : ""}`}
            onClick={() => onSelect(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
