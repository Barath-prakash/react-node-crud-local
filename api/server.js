const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/build")));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/api/get-users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/add-user", (req, res) => {
  console.log("req.body", req.body);
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.put("/api/update-user", (req, res) => {
  const user = req.body.user;
  console.log("Updating user:::::", user);
  users[user.userId] = user;
  res.json("user updated");
});

app.delete("/api/delete-user/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log("Adding user:::::", userId);
  users.splice(userId, 1);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
