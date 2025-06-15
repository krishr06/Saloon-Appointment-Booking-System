const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model

// Register Route
router.post("/register", async (req, res) => {
    const { name, mobile, username, password } = req.body;

    if (!name || !mobile || !username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if username or mobile already exists
        const existingUser = await User.findOne({ $or: [{ username }, { mobile }] });
        if (existingUser) {
            return res.status(400).json({ message: "Username or Mobile already taken" });
        }

        // Create new user
        const newUser = new User({ name, mobile, username, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Find user by username and check password
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


// Register API
router.post("/register", async (req, res) => {
    const { name, mobile, username, password, confirmPassword } = req.body;
  
    if (mobile.length !== 10) {
      return res.status(400).json({ message: "Please enter a valid 10-digit mobile number." });
    }
  
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }
  
    try {
      // Check if username or mobile already exists
      const existingUser = await User.findOne({ $or: [{ username }, { mobile }] });
      if (existingUser) {
        return res.status(400).json({ message: "Username or mobile number already exists." });
      }
  
      // Create new user
      const newUser = new User({ name, mobile, username, password });
      await newUser.save();
      
      res.status(201).json({ message: "Registration successful", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
  
  
module.exports = router;
