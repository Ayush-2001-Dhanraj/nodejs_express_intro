const friends_model = require("../model/friends.model");

function get_friends(req, res) {
  res.status(200).json(friends_model);
}

function add_friend(req, res) {
  const { name } = req.body;

  if (name) {
    friends_model.push({ id: friends_model.length, name });
    return res.status(200).json(friends_model[friends_model.length - 1]);
  }

  return res.status(400).json({ err: "Name property missing!!" });
}

function get_friend(req, res) {
  const friend = friends_model.filter(
    (fir) => fir.id === +req.params.friendID
  )[0];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res
      .status(404)
      .json({ err: `Friend with ID: ${req.params.friendID} doesn't exists` });
  }
}

module.exports = { add_friend, get_friends, get_friend };
