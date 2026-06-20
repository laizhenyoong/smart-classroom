import cors from "cors";
import express from "express";
import { generateWidgetHtml, isConfigured } from "./llm.js";

const PORT = process.env.PORT || 3001;

if (!isConfigured()) {
  console.error("Missing LLM_API_KEY. Copy .env.example to .env and add your key.");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/generate", async (req, res) => {
  const prompt = req.body?.prompt?.trim();
  if (!prompt) {
    return res.status(400).json({ error: "A non-empty 'prompt' is required." });
  }

  try {
    const html = await generateWidgetHtml(prompt);
    res.json({ html });
  } catch (err) {
    // Log the real cause server-side; keep the client message generic.
    console.error("generate failed:", err);
    res.status(502).json({ error: "Failed to generate widget." });
  }
});

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
