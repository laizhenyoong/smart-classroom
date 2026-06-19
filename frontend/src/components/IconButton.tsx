import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
  size?: number;
}

export function IconButton({
  label,
  children,
  size = 40,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={`icon-button${className ? ` ${className}` : ""}`}
      style={{ width: size, height: size }}
      {...rest}
    >
      {children}
    </button>
  );
}
