import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// @route   POST /api/feedback
// @desc    Save new feedback
router.post("/", async (req, res) => {
  try {
    const {
      name,
      message,
      foodQuality,
      service,
      ambiance,
      valueForMoney,
      overallExperience,
    } = req.body;

    // Validate input
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required" });
    }

    const newFeedback = new Feedback({
      name,
      message,
      foodQuality,
      service,
      ambiance,
      valueForMoney,
      overallExperience,
    });

    await newFeedback.save();
    res.status(201).json({ message: "✅ Feedback submitted successfully!" });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ error: "Server error, please try again later" });
  }
});

// @route   GET /api/feedback
// @desc    Get all feedback
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Error fetching feedback:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
