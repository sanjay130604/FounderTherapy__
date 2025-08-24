// models/Journal.js
// Schema for storing journal entries in MongoDB

const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Optional for anonymous users
  content: { type: String, required: true },      // Actual journal entry
  mood: [String],                                 // Array of mood labels (e.g., ["stressed", "anxious"])
  summary: String,                                // AI-generated summary of the journal
  createdAt: { type: Date, default: Date.now }    // Timestamp
});

module.exports = mongoose.model("Journal", JournalSchema);
