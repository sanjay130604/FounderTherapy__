// routes/geminiRoutes.js
// Route definitions for AI mood, prompt, feedback

const router = require("express").Router();
const {
  analyzeMood,
  generatePrompt,
  feedbackOnJournal,
} = require("../controllers/geminiController");

router.post("/analyze-mood", analyzeMood);      // POST /api/openai/analyze-mood
router.post("/generate-prompt", generatePrompt);// POST /api/openai/generate-prompt
router.post("/feedback", feedbackOnJournal);    // POST /api/openai/feedback

module.exports = router;
