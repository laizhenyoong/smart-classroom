import { SYSTEM_PROMPT } from "./prompt.js";

// Provider-specific details are isolated here; swapping models touches only this file.
const MODEL = "gemini-2.5-flash";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
const API_KEY = process.env.LLM_API_KEY;

export function isConfigured() {
  return Boolean(API_KEY);
}

export async function generateWidgetHtml(prompt) {
  const res = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7 },
    }),
  });

  if (!res.ok) {
    throw new Error(`Model request failed (${res.status}): ${await res.text()}`);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Model returned no content");

  return stripCodeFences(text);
}

// Models often wrap output in ```html fences despite instructions.
function stripCodeFences(text) {
  return text
    .trim()
    .replace(/^```(?:html)?\s*\n?/i, "")
    .replace(/\n?```$/, "")
    .trim();
}
