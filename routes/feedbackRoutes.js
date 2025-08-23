import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// POST: Save feedback form
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: "✅ Feedback saved successfully" });
  } catch (error) {
    console.error("❌ Error saving feedback:", error);
    res.status(500).json({ message: "❌ Error saving feedback", error: error.message });
  }
});

export default router;
