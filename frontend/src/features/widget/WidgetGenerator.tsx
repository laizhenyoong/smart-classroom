import { useEffect, useState } from "react";
import type { Editor, VecLike } from "tldraw";
import { GeneratePanel } from "./GeneratePanel";
import { useGenerateWidget } from "./useGenerateWidget";

interface MenuState {
  screen: { x: number; y: number };
  page: VecLike;
}

// tldraw runs with hideUi, so there is no default context menu. We capture the
// board's contextmenu event, open a prompt popover, and place the widget there.
export function WidgetGenerator({ editor }: { editor: Editor }) {
  const [menu, setMenu] = useState<MenuState | null>(null);
  const generate = useGenerateWidget(editor);

  useEffect(() => {
    const board = document.querySelector<HTMLElement>(".board");
    if (!board) return;

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      const screen = { x: e.clientX, y: e.clientY };
      setMenu({ screen, page: editor.screenToPage(screen) });
    };

    board.addEventListener("contextmenu", handleContextMenu);
    return () => board.removeEventListener("contextmenu", handleContextMenu);
  }, [editor]);

  if (!menu) return null;

  return (
    <GeneratePanel
      screen={menu.screen}
      onSubmit={(prompt) => {
        generate(prompt, menu.page);
        setMenu(null);
      }}
      onClose={() => setMenu(null)}
    />
  );
}
