const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Entry = require("../models/Entry");
const Profile = require("../models/Profile");
const User = require("../models/User");

// @Route GET /entry/:id
// Private (Needs auth middleware)
// Gets entries by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ msg: "Entry not found" });
    }
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Entry not found" });
    }
    res
      .status(500)
      .send("Server Error with the Finding entry with entry ID process");
  }
});

// @Route GET /entry
// Private (Needs auth middleware)
// Gets all the entries once logged in
router.get("/", auth, async (req, res) => {
  try {
    const entries = await Entry.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @Route POST /entry
// Private (Needs auth middleware)
// Creates a new main entry
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newEntry = new Entry({
        name: user.name,
        text: req.body.text,
        user: req.user.id,
      });

      const entry = await newEntry.save();
      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error with Creating a New Entry");
    }
  }
);

// @Route PUT /entry/upvotes/:id
// Private (Needs auth middleware)
// Upvotes the Entry using the entry id
router.put("/upvote/:id", auth, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    //Check if the post has already been like
    if (
      entry.upvotes.filter((upvote) => upvote.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Entry already liked by you" });
    }

    entry.upvotes.unshift({ user: req.user.id });

    await entry.save();
    res.json(entry.upvotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with Upvoting an Entry");
  }
});

// @Route PUT /entry/downvote/:id
// Private (Needs auth middleware)
// Downvotes an Entry using the entry id
router.put("/downvote/:id", auth, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    //Check if the post has already been like
    if (
      entry.upvotes.filter((upvote) => upvote.user.toString() === req.user.id)
        .length === 0
    ) {
      return res
        .status(400)
        .json({ msg: "Entry has not yet been upvoted by you" });
    }

    // Remove index
    const removeIndex = entry.upvotes
      .map((upvote) => upvote.user.toString())
      .indexOf(req.user.id);

    entry.upvotes.splice(removeIndex, 1);

    await entry.save();
    res.json(entry.upvotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with Downvoting an Entry");
  }
});

// @Route POST /entry/comment/:id
// Private (Needs auth middleware)
// Comments on an entry
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const entry = await Entry.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        user: req.user.id,
      };

      entry.comment.unshift(newComment);

      await entry.save();

      res.json(entry.comment);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .send("Server Error with Adding a New Comment to the Entry");
    }
  }
);

// @Route DELETE /entry/:id
// Private (Needs auth middleware)
// Deletes the Entry using its ID
router.delete("/:id", auth, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ msg: "Entry not found" });
    }
    // Check User
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorize" });
    }

    await entry.remove();
    res.json({ msg: "Entry removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Entry not found" });
    }
    res.status(500).send("Server Error with the Deletion of the Entry Process");
  }
});

module.exports = router;
