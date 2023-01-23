const express = require("express");
const { request } = require("http");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user/:id", (req, res) => {
  const q = req.query;
  console.log(q);

  // const q = req.params;
  // console.log(q);
  res.json({ userid: q.id });
});

app.get("/cat", (req, res) => {
  res.send({ sound: "야옹" });
});

app.listen(port, () => {
  console.log(`Express App listening on port ${port}`);
});
