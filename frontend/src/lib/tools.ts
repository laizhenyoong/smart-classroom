import type { ComponentType, SVGProps } from "react";
import {
  ArrowIcon,
  EraserIcon,
  HandIcon,
  HighlighterIcon,
  NoteIcon,
  PenIcon,
  SelectIcon,
  ShapeIcon,
  TextIcon,
} from "../components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export interface ToolDef {
  id: string;
  label: string;
  icon: Icon;
  // Built-in tldraw tool activated via editor.setCurrentTool().
  tldrawTool: string;
  shortcut?: string;
}

export const TOOLS: ToolDef[] = [
  { id: "select", label: "Select", icon: SelectIcon, tldrawTool: "select", shortcut: "V" },
  { id: "hand", label: "Pan", icon: HandIcon, tldrawTool: "hand", shortcut: "H" },
  { id: "draw", label: "Pen", icon: PenIcon, tldrawTool: "draw", shortcut: "P" },
  { id: "highlight", label: "Highlighter", icon: HighlighterIcon, tldrawTool: "highlight", shortcut: "Shift+P" },
  { id: "eraser", label: "Eraser", icon: EraserIcon, tldrawTool: "eraser", shortcut: "E" },
  { id: "note", label: "Sticky note", icon: NoteIcon, tldrawTool: "note", shortcut: "N" },
  { id: "text", label: "Text", icon: TextIcon, tldrawTool: "text", shortcut: "T" },
  { id: "geo", label: "Shape", icon: ShapeIcon, tldrawTool: "geo", shortcut: "R" },
  { id: "arrow", label: "Arrow", icon: ArrowIcon, tldrawTool: "arrow", shortcut: "A" },
];
