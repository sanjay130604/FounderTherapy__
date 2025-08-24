// server.js
// 🚀 Main entry point for the FounderTherapy backend (Node.js + Express)

// 🔧 Imports & Config
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// 🧠 Load environment variables from .env file
dotenv.config();

// 📦 Route imports
const authRoutes = require("./routes/authRoutes");
const journalRoutes = require("./routes/journalRoutes");
const geminiRoutes = require("./routes/geminiRoutes");

// 💡 Create express app
const app = express();

// 🔒 Middleware
app.use(cors({
  origin: "*", // ✅ Allow all origins (can restrict to frontend URL later)
}));
app.use(express.json()); // ✅ Parse incoming JSON requests

// 🔗 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// 🛣️ Route Definitions
app.use("/api/auth", authRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/openai", geminiRoutes);

// 🌍 Health Check Route (for Render)
app.get("/", (req, res) => {
  res.send("🌿 FounderTherapy backend is running ✅");
});

// 🚪 Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
