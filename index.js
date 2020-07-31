const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.get("/", (req, res) => res.send("API is Online"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

//DB is connect now start with models and routes and get it working
