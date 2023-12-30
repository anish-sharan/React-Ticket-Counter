const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

const JWTKEY = process.env.JWTKEY;
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .send({ success: false, error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWTKEY, async (error, payload) => {
    if (error) {
      return res
        .status(401)
        .send({ success: false, error: "you must be logged in" });
    }
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};