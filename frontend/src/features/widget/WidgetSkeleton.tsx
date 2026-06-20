import { SparkleIcon } from "../../components/icons";

interface WidgetSkeletonProps {
  status: "loading" | "error";
  prompt: string;
}

export function WidgetSkeleton({ status, prompt }: WidgetSkeletonProps) {
  const loading = status === "loading";
  return (
    <div className={`widget__skeleton widget__skeleton--${status}`}>
      <div className="widget__skeleton-badge">
        <SparkleIcon width={22} height={22} />
      </div>
      <p className="widget__skeleton-text">
        {loading ? "Generating widget" : "Couldn't generate this widget"}
      </p>
      {prompt && <p className="widget__skeleton-prompt">{prompt}</p>}
      {loading && (
        <div className="widget__skeleton-bar">
          <span className="widget__skeleton-bar-fill" />
        </div>
      )}
    </div>
  );
}
