import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const SelectIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 3l6 17 2-7 7-2z" />
  </svg>
);

export const PenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
  </svg>
);

export const HighlighterIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20h16" />
    <path d="M9 16l-3 3H3v-3l9-9 3 3z" />
    <path d="M12 7l4-4 5 5-4 4" />
  </svg>
);

export const EraserIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 16l7 7h7l-4-4" />
    <path d="M20 13l-7-7-9 9 4 4" />
  </svg>
);

export const NoteIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 4h16v11l-5 5H4z" />
    <path d="M20 15h-5v5" />
  </svg>
);

export const TextIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 6V4h16v2" />
    <path d="M12 4v16" />
    <path d="M9 20h6" />
  </svg>
);

export const ShapeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <circle cx="17" cy="17" r="4" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const HandIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 11V5a1.5 1.5 0 0 1 3 0v5" />
    <path d="M11 10V4a1.5 1.5 0 0 1 3 0v6" />
    <path d="M14 10V5.5a1.5 1.5 0 0 1 3 0V13" />
    <path d="M8 11v-1a1.5 1.5 0 0 0-3 0v3a7 7 0 0 0 7 7h1a6 6 0 0 0 6-6" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.8 4.8L18 9l-4.2 1.2L12 15l-1.8-4.8L6 9l4.2-1.2z" />
    <path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9z" />
  </svg>
);

// Brand mark: a whiteboard frame with a sparkle inside — "smart whiteboard".
export const LogoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="14" rx="2.5" />
    <path d="M9 21h6" />
    <path d="M12 18v3" />
    <path
      d="M11 7.5l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

export const UndoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 7L4 12l5 5" />
    <path d="M4 12h11a5 5 0 0 1 0 10h-3" />
  </svg>
);

export const RedoIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15 7l5 5-5 5" />
    <path d="M20 12H9a5 5 0 0 0 0 10h3" />
  </svg>
);

export const TrashIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16" />
    <path d="M10 11v6M14 11v6" />
    <path d="M5 7l1 13h12l1-13" />
    <path d="M9 7V4h6v3" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 11l8-7 8 7" />
    <path d="M6 10v10h12V10" />
  </svg>
);

export const BoardsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
