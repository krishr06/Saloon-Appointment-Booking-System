const express = require("express");
const Service = require("../models/Service"); // Ensure the correct path to your model

const router = express.Router();

// Route to get all services
router.get("/services", async (req, res) => {
    try {
        const services = await Service.find(); // Fetch all services
        res.json(services); // Return data as JSON
    } catch (error) {
        res.status(500).json({ message: "Error fetching services", error });
    }
});

module.exports = router;
