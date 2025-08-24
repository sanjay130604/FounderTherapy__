// routes/journalRoutes.js
// Route definitions for journals

const router = require("express").Router();
const { createJournal, getUserJournals } = require("../controllers/journalController");

router.post("/", createJournal);          // POST /api/journals
router.get("/:userId", getUserJournals);  // GET /api/journals/:userId

module.exports = router;
