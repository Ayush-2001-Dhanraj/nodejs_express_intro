const express = require("express");

const friends_router = require("./routes/friends.router");
const message_controller = require("./routes/messages.router");

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.baseUrl}${req.url} ${Date.now() - start}ms`);
});

app.use(express.json());

app.use("/friends", friends_router);
app.use("/messages", message_controller);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
