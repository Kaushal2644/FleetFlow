const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // token check
  if (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")) {

    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded; // user info save
      next();

    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }
};

module.exports = protect;