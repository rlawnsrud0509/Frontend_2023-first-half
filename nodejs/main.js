const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/dog", (req, res) => {
  res.send("강아지");
});

app.get("/cat", (req, res) => {
  res.send("고양이");
});

app.listen(port, () => {
  console.log(`Express App listening on port ${port}`);
});
