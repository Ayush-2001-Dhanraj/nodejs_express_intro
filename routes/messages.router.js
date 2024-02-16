const express = require("express");

const message_controller = require("../controller/messages.controller");

const message_router = express.Router();

message_router.get("/", message_controller.get_messages);
message_router.post("/", message_controller.post_message);

module.exports = message_router;
