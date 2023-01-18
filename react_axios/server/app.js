const express = require("express");
const app = express();

const todoList = [];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get('/api/todo', ()=> {
    return todoList;
})

app.listen(3000, () => {
  console.log("ff");
});
