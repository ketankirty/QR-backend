const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: "✅ Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error saving contact", error });
  }
});

module.exports = router;
