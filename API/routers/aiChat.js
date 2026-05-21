import express from "express";
import OpenAI from "openai";

import { config, requireConfig } from "../config/env.js";

const router = express.Router();

const getOpenAiClient = () =>
  new OpenAI({
    apiKey: requireConfig(
      config.openAiApiKey,
      "OPENAI_API_KEY is missing. Add it to API/.env or Vercel environment variables."
    ),
  });

router.post("/chat", async (req, res) => {
// console.log(req.body);
  try {
    const openai = getOpenAiClient();
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: message }
      ]
    });
     
    res.json({
      reply: completion.choices[0].message.content
    });
  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ error: "AI failed" });
  }
});

export default router;
