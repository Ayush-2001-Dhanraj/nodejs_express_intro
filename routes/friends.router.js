const express = require("express");

const friends_controller = require("../controller/friends.controller");

const friends_router = express.Router();

friends_router.use((req, res, next) => {
  console.log(`IP address: ${req.ip}`);
  next();
});

friends_router.get("/", friends_controller.get_friends);
friends_router.post("/", friends_controller.add_friend);
friends_router.get("/:friendID", friends_controller.get_friend);

module.exports = friends_router;
