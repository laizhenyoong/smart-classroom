import type { TLDefaultColorStyle } from "tldraw";

// tldraw color ids (DefaultColorStyle) paired with their light-theme swatch hex.
export interface ColorDef {
  id: TLDefaultColorStyle;
  label: string;
  swatch: string;
}

export const COLORS: ColorDef[] = [
  { id: "black", label: "Black", swatch: "#1d1d1d" },
  { id: "grey", label: "Grey", swatch: "#9fa8b2" },
  { id: "blue", label: "Blue", swatch: "#4263eb" },
  { id: "light-blue", label: "Light blue", swatch: "#4dabf7" },
  { id: "green", label: "Green", swatch: "#099268" },
  { id: "light-green", label: "Light green", swatch: "#40c057" },
  { id: "yellow", label: "Yellow", swatch: "#f1ac4b" },
  { id: "orange", label: "Orange", swatch: "#e16919" },
  { id: "red", label: "Red", swatch: "#e03131" },
  { id: "violet", label: "Violet", swatch: "#ae3ec9" },
];
