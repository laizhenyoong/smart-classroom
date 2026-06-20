import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  T,
  resizeBox,
  type RecordProps,
  type TLBaseShape,
  type TLResizeInfo,
} from "tldraw";
import { WidgetSkeleton } from "./WidgetSkeleton";

export type WidgetShape = TLBaseShape<
  "widget",
  {
    w: number;
    h: number;
    html: string;
    prompt: string;
    status: "loading" | "ready" | "error";
  }
>;

// Register the widget type into tldraw's global shape map so it's a known
// member of TLShape (required for ShapeUtil and resizeBox typing).
declare module "tldraw" {
  interface TLGlobalShapePropsMap {
    widget: WidgetShape["props"];
  }
}

export class WidgetShapeUtil extends ShapeUtil<WidgetShape> {
  static override type = "widget" as const;
  static override props: RecordProps<WidgetShape> = {
    w: T.number,
    h: T.number,
    html: T.string,
    prompt: T.string,
    status: T.literalEnum("loading", "ready", "error"),
  };

  getDefaultProps(): WidgetShape["props"] {
    return { w: 480, h: 360, html: "", prompt: "", status: "loading" };
  }

  override canResize = () => true;

  getGeometry(shape: WidgetShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  override onResize(shape: WidgetShape, info: TLResizeInfo<WidgetShape>) {
    return resizeBox(shape, info);
  }

  component(shape: WidgetShape) {
    const { w, h, html, status, prompt } = shape.props;
    return (
      <HTMLContainer className="widget" style={{ width: w, height: h }}>
        {status === "ready" ? (
          // allow-scripts but NOT allow-same-origin — full isolation from host.
          <iframe
            className="widget__frame"
            srcDoc={html}
            sandbox="allow-scripts"
            title={prompt || "Generated widget"}
          />
        ) : (
          <WidgetSkeleton status={status} prompt={prompt} />
        )}
      </HTMLContainer>
    );
  }

  getIndicatorPath(shape: WidgetShape) {
    const path = new Path2D();
    path.roundRect(0, 0, shape.props.w, shape.props.h, 12);
    return path;
  }
}
