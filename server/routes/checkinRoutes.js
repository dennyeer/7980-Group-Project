const express = require("express");
const Checkin = require("../models/Checkin");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { city, note, imageUrl } = req.body;

    const checkin = new Checkin({
      userId: req.user.userId,
      city,
      note,
      imageUrl
    });

    await checkin.save();
    res.status(201).json(checkin);
  } catch (error) {
    console.error("CREATE CHECKIN ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Read all + lookup
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { city } = req.query;

    const filter = { userId: req.user.userId };
    if (city) {
      filter.city = city;
    }

    const checkins = await Checkin.find(filter);
    res.json(checkins);
  } catch (error) {
    console.error("GET /api/checkins error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Read one
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const checkin = await Checkin.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!checkin) {
      return res.status(404).json({ message: "Checkin not found" });
    }

    res.json(checkin);
  } catch (error) {
    console.error("GET ONE CHECKIN ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Update
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { city, note, imageUrl } = req.body;

    const updatedCheckin = await Checkin.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { city, note, imageUrl },
      { new: true }
    );

    if (!updatedCheckin) {
      return res.status(404).json({ message: "Checkin not found" });
    }

    res.json(updatedCheckin);
  } catch (error) {
    console.error("UPDATE CHECKIN ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Delete
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedCheckin = await Checkin.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!deletedCheckin) {
      return res.status(404).json({ message: "Checkin not found" });
    }

    res.json({ message: "Checkin deleted successfully" });
  } catch (error) {
    console.error("DELETE CHECKIN ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;