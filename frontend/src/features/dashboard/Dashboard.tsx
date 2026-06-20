import { useState } from "react";
import { Boards } from "./Boards";
import { Home } from "./Home";
import { Sidebar } from "./Sidebar";
import "./dashboard.css";

interface DashboardProps {
  onOpenBoard: (id: string) => void;
}

export function Dashboard({ onOpenBoard }: DashboardProps) {
  const [active, setActive] = useState("home");

  return (
    <div className="dashboard">
      <Sidebar active={active} onSelect={setActive} />
      <main className="dashboard__main">
        {active === "home" ? <Home /> : <Boards onOpenBoard={onOpenBoard} />}
      </main>
    </div>
  );
}
