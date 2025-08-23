import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST: Save contact form
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "✅ Contact saved successfully" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ message: "❌ Error saving contact", error: error.message });
  }
});

export default router;
