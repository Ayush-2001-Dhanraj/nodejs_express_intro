const express = require("express");

const friends_controller = require("./controller/friends.controller");

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.url} ${Date.now() - start}ms`);
});

app.use(express.json());

app.get("/friends", friends_controller.get_friends);

app.post("/friends", friends_controller.add_friend);

app.get("/friends/:friendID", friends_controller.get_friend);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
