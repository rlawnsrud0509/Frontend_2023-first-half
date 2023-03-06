const express = require("express");
const { request } = require("http");
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

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

app.get("/sound/:name", (req, res) => {
  y;
  //const p = req.params; p.name == const {name} = req.params //name값을 뽑아쓰는 코드를 단축시킨 것.

  const { name } = req.params;

  if (name === "dog") {
    res.json({ sound: "멍멍" });
  } else if (name === "cat") {
    res.json({ sound: "야옹" });
  } else if (name === "pig") {
    res.json({ sound: "꿀꿀" });
  } else if (name === "monkey") {
    res.json({ sound: "우끼끼" });
  } else {
    res.json({ sound: "알수없음ㅜㅜ" });
  }
});

app.listen(port, () => {
  console.log(`Express App listening on port ${port}`);
});
