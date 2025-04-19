const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js Docker container!");
});

app.listen(3000, () => {
  console.log("npm init -yServer is running on http://localhost:3000");
});
