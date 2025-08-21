const express = require("express");
const Feedback = require("../models/Feedback");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.json({ message: "✅ Feedback saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error saving feedback", error });
  }
});

module.exports = router;
