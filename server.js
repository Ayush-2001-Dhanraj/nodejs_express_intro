const express = require("express");
const path = require("path");

const friends_router = require("./routes/friends.router");
const message_controller = require("./routes/messages.router");

const PORT = 3000;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.baseUrl}${req.url} ${Date.now() - start}ms`);
});

app.use(express.json());

app.use("/friends", friends_router);
app.use("/messages", message_controller);

app.use("/site", express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.render("index", {
    title: "Lala lala!! MAWMA",
    caption: "Meow MEOW purrr PURRRRRRRR........",
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
