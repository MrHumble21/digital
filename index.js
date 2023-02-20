const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello from server");
});

const port = 9999;

app.listen(port, (req, res) => {
  console.log("server listening on port " + port);
});
