const mongoose = require("mongoose");

const Entry = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ref",
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  upvotes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("entry", Entry);
