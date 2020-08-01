const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

// req.body
app.use(express.json());

app.get("/", (req, res) => res.send("API is Online"));

app.use("/registration", require("./routes/registration"));
app.use("/login", require("./routes/login"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
