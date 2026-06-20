// The backend holds the model key and calls the LLM; the browser only sees /api.
export async function generateWidget(prompt: string): Promise<string> {
  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error(`Generate failed: ${res.status}`);

  const { html } = await res.json();
  return html;
}
