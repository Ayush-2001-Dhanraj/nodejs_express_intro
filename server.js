const express = require("express");

const PORT = 3000;
const app = express();

const friends = [
  { id: 0, name: "Ayush" },
  { id: 1, name: "Anupam" },
];

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendID", (req, res) => {
  const friend = friends.filter((fir) => fir.id === +req.params.friendID)[0];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res
      .status(404)
      .json({ err: `Friend with ID: ${req.params.friendID} doesn't exists` });
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
