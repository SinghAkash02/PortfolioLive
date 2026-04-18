const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST (save data)
router.post('/', async (req, res) => {
    try {
        console.log("Incoming Data:", req.body);

        const newMessage = new Contact(req.body);
        await newMessage.save();

        res.json({ message: "Message saved successfully" });

    } catch (error) {
        console.error("FULL ERROR:", error); // 👈 IMPORTANT
        res.status(500).json({ message: "Error saving message" });
    }
});

module.exports = router;