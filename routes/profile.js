const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../models/Profile");
const User = require("../models/User");

// @Route /profile
// Private
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

// @Route /profile
// Public
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

module.exports = router;
