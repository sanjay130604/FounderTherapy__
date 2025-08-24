const axios = require("axios");
const Journal = require("../models/Journal");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

// 🔁 Delay helper for retry logic
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 🔁 Gemini API with retry logic (max 3 retries)
const generateGeminiResponse = async (prompt, maxRetries = 3) => {
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.post(GEMINI_API_URL, body, {
        headers: { "Content-Type": "application/json" },
      });

      const resultText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!resultText) throw new Error("Gemini returned no text");

      return resultText.trim();
    } catch (err) {
      const status = err.response?.status;
      const isRetryable = status === 503 || status === 500;

      console.error(`❌ Gemini API error (Attempt ${attempt}):`, err.response?.data || err.message);

      if (attempt === maxRetries || !isRetryable) {
        throw new Error("Gemini API call failed after retries");
      }

      console.log("🔁 Retrying Gemini API in 2 seconds...");
      await delay(2000);
    }
  }
};

// 🧠 Analyze Mood Controller
exports.analyzeMood = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content?.trim()) {
      return res.status(400).json({ error: "Journal content is required" });
    }
//2. One-sentence emotional summary
    const prompt = `Analyze the emotional mood of this journal entry and provide:
1. 2–3 mood words
2. A practical solution in 3 clear steps to help improve the mood (short, realistic, and founder-friendly)

Journal: "${content}"`;

    const result = await generateGeminiResponse(prompt);
    console.log("🧠 Gemini mood & solution:", result);

    res.json({ moodAndSolution: result });
  } catch (err) {
    res.status(500).json({ error: "Mood analysis failed", message: err.message });
  }
};

// ✍️ Generate Journaling Prompt Controller
exports.generatePrompt = async (req, res) => {
  try {
    const prompt = `Give a thoughtful journaling prompt for startup founders. Just one sentence.`;
    const result = await generateGeminiResponse(prompt);
    res.json({ prompt: result });
  } catch (err) {
    res.status(500).json({ error: "Prompt generation failed", message: err.message });
  }
};

// 💬 Empathetic Feedback Controller
exports.feedbackOnJournal = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content?.trim()) {
      return res.status(400).json({ error: "Journal content is required for feedback" });
    }

    const prompt = `You are an empathetic listener. Respond to this journal with one short sentence showing emotional understanding only (no advice or suggestions):\n\n"${content}"`;

    const reply = await generateGeminiResponse(prompt);
    res.json({ feedback: reply });
  } catch (err) {
    res.status(500).json({ error: "Feedback generation failed", message: err.message });
  }
};
