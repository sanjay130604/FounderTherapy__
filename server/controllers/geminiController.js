// // const axios = require("axios");

// // const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// // if (!GEMINI_API_KEY) {
// //   console.error("❌ GEMINI_API_KEY missing");
// // }

// // const GEMINI_API_URL =
// //   "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

// // const callGemini = async (prompt) => {
// //   try {
// //     const response = await axios.post(
// //       `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
// //       {
// //         contents: [
// //           {
// //             role: "user",
// //             parts: [{ text: prompt }],
// //           },
// //         ],
// //       },
// //       {
// //         headers: { "Content-Type": "application/json" },
// //         timeout: 15000,
// //       }
// //     );

// //     const text =
// //       response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

// //     if (!text) {
// //       console.error("❌ Gemini empty response:", response.data);
// //       throw new Error("Gemini returned no text");
// //     }

// //     return text;
// //   } catch (err) {
// //     console.error("🔥 GEMINI ERROR DETAILS:");
// //     console.error("Status:", err.response?.status);
// //     console.error("Data:", err.response?.data);
// //     console.error("Message:", err.message);

// //     throw new Error(
// //       err.response?.data?.error?.message ||
// //       "Gemini API failed"
// //     );
// //   }
// // };

// // // 🧠 Analyze Mood
// // exports.analyzeMood = async (req, res) => {
// //   try {
// //     const { content } = req.body;

// //     if (!content || !content.trim()) {
// //       return res.status(400).json({
// //         success: false,
// //         error: "Content is required",
// //       });
// //     }

// //     const prompt = `
// // Analyze this journal and return:
// // 1. 2–3 mood words
// // 2. A simple 3-step solution

// // Journal:
// // "${content}"
// // `;

// //     const result = await callGemini(prompt);

// //     return res.json({
// //       success: true,
// //       moodAndSolution: result,
// //     });
// //   } catch (err) {
// //     return res.status(500).json({
// //       success: false,
// //       error: "AI processing failed",
// //       details: err.message,
// //     });
// //   }
// // };

// // // ✍️ Prompt
// // exports.generatePrompt = async (req, res) => {
// //   try {
// //     const result = await callGemini(
// //       "Give one journaling prompt for startup founders."
// //     );
// //     res.json({ success: true, prompt: result });
// //   } catch (err) {
// //     res.status(500).json({ success: false, error: err.message });
// //   }
// // };

// // // 💬 Feedback
// // exports.feedbackOnJournal = async (req, res) => {
// //   try {
// //     const { content } = req.body;

// //     if (!content?.trim()) {
// //       return res.status(400).json({ error: "Content required" });
// //     }

// //     const result = await callGemini(
// //       `Respond empathetically in one sentence:\n"${content}"`
// //     );

// //     res.json({ success: true, feedback: result });
// //   } catch (err) {
// //     res.status(500).json({ success: false, error: err.message });
// //   }
// // };

// // controllers/geminiController.js

// const axios = require("axios");

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// if (!GEMINI_API_KEY) {
//   console.error("❌ GEMINI_API_KEY is missing. Set it in Render Environment Variables.");
// }

// const GEMINI_API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

// const callGemini = async (prompt) => {
//   try {
//     const response = await axios.post(
//       `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
//       {
//         contents: [
//           {
//             role: "user",
//             parts: [{ text: prompt }],
//           },
//         ],
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//         timeout: 15000,
//       }
//     );

//     const text =
//       response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!text) {
//       console.error("❌ Gemini returned empty response:", response.data);
//       throw new Error("Empty response from Gemini");
//     }

//     return text;
//   } catch (err) {
//     console.error("🔥 GEMINI API ERROR");
//     console.error("Status:", err.response?.status);
//     console.error("Data:", err.response?.data);
//     console.error("Message:", err.message);

//     throw new Error(
//       err.response?.data?.error?.message || "Gemini API failed"
//     );
//   }
// };

// // 🧠 Analyze Mood
// exports.analyzeMood = async (req, res) => {
//   try {
//     const { content } = req.body;

//     if (!content || !content.trim()) {
//       return res.status(400).json({
//         success: false,
//         error: "Content is required",
//       });
//     }

//     const prompt = `
// Analyze the following journal.
// Return:
// 1. 2–3 mood words
// 2. A simple 3-step solution

// Journal:
// "${content}"
// `;

//     const result = await callGemini(prompt);

//     res.json({
//       success: true,
//       moodAndSolution: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       error: "AI mood analysis failed",
//       details: err.message,
//     });
//   }
// };

// // ✍️ Generate Prompt
// exports.generatePrompt = async (req, res) => {
//   try {
//     const result = await callGemini(
//       "Give one short journaling prompt for startup founders."
//     );

//     res.json({
//       success: true,
//       prompt: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       error: "Prompt generation failed",
//       details: err.message,
//     });
//   }
// };

// // 💬 Feedback
// exports.feedbackOnJournal = async (req, res) => {
//   try {
//     const { content } = req.body;

//     if (!content?.trim()) {
//       return res.status(400).json({ error: "Content required" });
//     }

//     const result = await callGemini(
//       `Respond empathetically in one sentence:\n"${content}"`
//     );

//     res.json({
//       success: true,
//       feedback: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       error: "Feedback failed",
//       details: err.message,
//     });
//   }
// };


// controllers/geminiController.js
// ✅ LOCAL AI (NO API, NO KEY)

const getMoodFromText = (text) => {
  const moods = [];

  const lower = text.toLowerCase();

  if (lower.includes("stress") || lower.includes("pressure")) moods.push("Stressed");
  if (lower.includes("sad") || lower.includes("down")) moods.push("Sad");
  if (lower.includes("happy") || lower.includes("excited")) moods.push("Happy");
  if (lower.includes("angry") || lower.includes("frustrated")) moods.push("Frustrated");
  if (lower.includes("tired") || lower.includes("burnout")) moods.push("Burnt Out");

  if (moods.length === 0) moods.push("Neutral");

  return moods.slice(0, 3);
};

const getSolutionSteps = (moods) => {
  const steps = [];

  if (moods.includes("Stressed")) {
    steps.push("Take a 10-minute break");
    steps.push("Write down top 3 priorities");
    steps.push("Avoid multitasking today");
  }

  if (moods.includes("Sad")) {
    steps.push("Talk to someone you trust");
    steps.push("Reflect on small wins");
    steps.push("Do one enjoyable activity");
  }

  if (moods.includes("Burnt Out")) {
    steps.push("Reduce workload temporarily");
    steps.push("Get proper sleep");
    steps.push("Plan rest time");
  }

  if (steps.length === 0) {
    steps.push("Reflect on your thoughts");
    steps.push("Focus on what you can control");
    steps.push("Take one small action");
  }

  return steps;
};

// 🧠 Analyze Mood (LOCAL)
exports.analyzeMood = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({
        success: false,
        error: "Content is required",
      });
    }

    const moods = getMoodFromText(content);
    const steps = getSolutionSteps(moods);

    const response = `
Detected Moods:
- ${moods.join(", ")}

Suggested Steps:
1. ${steps[0]}
2. ${steps[1]}
3. ${steps[2]}
`;

    res.json({
      success: true,
      moodAndSolution: response.trim(),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Local AI processing failed",
    });
  }
};

// ✍️ Prompt Generator (LOCAL)
exports.generatePrompt = async (req, res) => {
  const prompts = [
    "What challenge did you face today as a founder?",
    "What decision is causing you stress right now?",
    "What small win did you achieve today?",
    "What is one thing you would do differently tomorrow?",
    "What is currently blocking your growth?",
  ];

  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  res.json({
    success: true,
    prompt: randomPrompt,
  });
};

// 💬 Feedback Generator (LOCAL)
exports.feedbackOnJournal = async (req, res) => {
  const { content } = req.body;

  if (!content || !content.trim()) {
    return res.status(400).json({ error: "Content required" });
  }

  res.json({
    success: true,
    feedback:
      "Thank you for sharing your thoughts. Reflecting like this helps build clarity and resilience.",
  });
};
