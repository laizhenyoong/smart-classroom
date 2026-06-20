import { useCallback } from "react";
import { type Editor, type VecLike, createShapeId } from "tldraw";
import { generateWidget } from "../../lib/api";
import type { WidgetShape } from "./WidgetShape";

const DEFAULT_W = 480;
const DEFAULT_H = 360;

// Creates a widget shape immediately in a loading state, then fills in its
// HTML once generated. The instant placeholder keeps generation feeling
// responsive, and a failure is just a status change on the same shape.
export function useGenerateWidget(editor: Editor) {
  return useCallback(
    async (prompt: string, point: VecLike) => {
      const id = createShapeId();
      const update = (props: Partial<WidgetShape["props"]>) =>
        editor.updateShape<WidgetShape>({ id, type: "widget", props });

      editor.createShape<WidgetShape>({
        id,
        type: "widget",
        x: point.x - DEFAULT_W / 2,
        y: point.y - DEFAULT_H / 2,
        props: { w: DEFAULT_W, h: DEFAULT_H, html: "", prompt, status: "loading" },
      });

      try {
        const html = await generateWidget(prompt);
        update({ html, status: "ready" });
      } catch {
        update({ status: "error" });
      }
    },
    [editor],
  );
}
