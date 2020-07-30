const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Mongoose is Connected...");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
