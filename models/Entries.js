const mongoose = require("mongoose");

const Entries = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
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
            type: Schema.Types.ObjectId,
            ref: "user",
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
