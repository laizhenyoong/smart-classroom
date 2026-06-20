interface WidgetSkeletonProps {
  status: "loading" | "error";
  prompt: string;
}

export function WidgetSkeleton({ status, prompt }: WidgetSkeletonProps) {
  return (
    <div className={`widget__skeleton widget__skeleton--${status}`}>
      <div className="widget__skeleton-icon">{status === "error" ? "!" : ""}</div>
      <p className="widget__skeleton-text">
        {status === "error" ? "Couldn't generate this widget" : "Generating…"}
      </p>
      {prompt && <p className="widget__skeleton-prompt">{prompt}</p>}
    </div>
  );
}
