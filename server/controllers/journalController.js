// controllers/journalController.js
// Handles saving and retrieving journal entries from MongoDB

const Journal = require("../models/Journal");

// Create new journal entry (anonymous or user-linked)
exports.createJournal = async (req, res) => {
  try {
    const { userId, content, mood, summary } = req.body;
    const journal = new Journal({ userId, content, mood, summary });
    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    res.status(500).json({ error: "Failed to save journal" });
  }
};

// Get all journals for a specific user
exports.getUserJournals = async (req, res) => {
  try {
    const { userId } = req.params;
    const journals = await Journal.find({ userId }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch journals" });
  }
};
