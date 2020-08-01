const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
  // Get Token
  const token = req.header("auth-token");

  // If no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify Token
  try {
    const decoded = jwt.verify(token, config.get("jwttoken"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
