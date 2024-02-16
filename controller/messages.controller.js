const path = require("path");

const messages_model = require("../model/messages.model");

function get_messages(req, res) {
  // return res
  //   .status(200)
  //   .sendFile(path.join(__dirname, "..", "public", "images", "cat.jpeg"));
  res.render("message", {
    title: "Messages to u mu kitty",
    Author: "MoewPatra",
  });
}

function post_message(req, res) {
  const { msg } = req.body;
  if (msg) {
    messages_model.push(msg);
    return res.status(200).json(messages_model[messages_model.length - 1]);
  }

  return res.status(400).json({ err: "msg property missing" });
}

module.exports = {
  get_messages,
  post_message,
};
