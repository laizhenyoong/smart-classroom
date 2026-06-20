import { useEffect, useRef, useState } from "react";
import { PlusIcon } from "../../components/icons";
import { CREATE_OPTIONS } from "./createOptions";

interface NewMenuProps {
  onCreate: (type: string) => void;
}

// [+] New: a dropdown of creation choices. New artifact types appear here
// automatically via CREATE_OPTIONS.
export function NewMenu({ onCreate }: NewMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <div className="new-menu" ref={ref}>
      <button className="new-menu__trigger" onClick={() => setOpen((v) => !v)}>
        <PlusIcon width={18} height={18} />
        New
      </button>

      {open && (
        <div className="new-menu__dropdown" role="menu">
          {CREATE_OPTIONS.map((opt) => (
            <button
              key={opt.type}
              className="new-menu__item"
              role="menuitem"
              disabled={!opt.enabled}
              onClick={() => {
                setOpen(false);
                onCreate(opt.type);
              }}
            >
              <span className="new-menu__icon">{opt.icon}</span>
              <span className="new-menu__text">
                <span className="new-menu__label">
                  {opt.label}
                  {!opt.enabled && <span className="new-menu__soon">Soon</span>}
                </span>
                <span className="new-menu__desc">{opt.description}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
