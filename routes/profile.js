const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Entry = require("../models/Entry");
const Profile = require("../models/Profile");
const User = require("../models/User");

// @Route GET /profile
// Public (Does not need auth middleware)
// Gets all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "name",
      "bio",
      "location",
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with getting all Profiles");
  }
});

//@Route GET /profile/me
// Private (Needs auth middleware)
// Gets current users profile
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "bio", "location"]);

    if (!profile) {
      return res.status(400).json({
        msg: "There is no profile for this user",
      });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with getting current profile");
  }
});

// @Route GET /profile/user/:user_id
// Public (Does not need auth middleware)
// Gets profile by user ID
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile)
      return res.status(400).json({ msg: "Unable to find profile" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      res.status(400).json({ msg: "Unable to find profile" });
    }
    res.status(500).send("Server Error");
  }
});

//@Route DELETE /profile
// Private (Needs auth middleware)
// Deletes the user along with the profile and the users entries.
router.delete("/", auth, async (req, res) => {
  try {
    //Remove entries
    await Entry.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //Remove User
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error with deleting the user");
  }
});

// @Route POST /profile
// Private (Needs auth middleware)
// Creates and Updates a User Profile
router.post(
  "/",
  [
    auth,
    [
      check("bio", "Bio is required").not().isEmpty(),
      check("location", "Location is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    // Build profile Object
    const profileField = {};
    const { bio, location, twitter, facebook, linkedin, instagram } = req.body;

    profileField.user = req.user.id;
    if (bio) profileField.bio = bio;
    if (location) profileField.location = location;

    profileField.social = {};
    if (twitter) profileFields.social.youtube = youtube;
    if (linkedin) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.youtube = youtube;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update Profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileField },
          { new: true }
        );
        return res.json(profile);
      }
      //Create Profile
      profile = new Profile(profileField);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error in Profile");
    }
  }
);

module.exports = router;
