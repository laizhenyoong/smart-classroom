import { COLORS, type ColorDef } from "../../lib/colors";

interface ColorPickerProps {
  activeColor: string;
  onSelectColor: (color: ColorDef) => void;
}

export function ColorPicker({ activeColor, onSelectColor }: ColorPickerProps) {
  return (
    <div className="color-picker" role="toolbar" aria-label="Colors">
      {COLORS.map((color) => (
        <button
          key={color.id}
          type="button"
          className={`swatch${activeColor === color.id ? " is-active" : ""}`}
          style={{ background: color.swatch }}
          aria-label={color.label}
          aria-pressed={activeColor === color.id}
          title={color.label}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
}
