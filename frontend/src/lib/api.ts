// Mock — swap body to fetch("/api/generate", { method:"POST", body: JSON.stringify({prompt}) })
// and return (await res.json()).html when the backend is ready.
export async function generateWidget(prompt: string): Promise<string> {
  await delay(1200);
  return mockWidgetHtml(prompt);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function mockWidgetHtml(prompt: string): string {
  const safePrompt = escapeHtml(prompt);
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-family: system-ui, sans-serif;
        background: #fff;
        color: #1c1d22;
      }
      h1 { font-size: 16px; margin: 0; color: #6b7280; font-weight: 500; }
      .count { font-size: 56px; font-weight: 700; font-variant-numeric: tabular-nums; }
      .row { display: flex; gap: 8px; }
      button {
        font: inherit;
        padding: 8px 18px;
        border: none;
        border-radius: 10px;
        background: #6366f1;
        color: #fff;
        cursor: pointer;
      }
      button:active { transform: scale(0.96); }
    </style>
  </head>
  <body>
    <h1>${safePrompt}</h1>
    <div class="count" id="count">0</div>
    <div class="row">
      <button onclick="step(-1)">−</button>
      <button onclick="step(1)">+</button>
    </div>
    <script>
      let n = 0;
      const el = document.getElementById("count");
      function step(d) { n += d; el.textContent = n; }
    </script>
  </body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
