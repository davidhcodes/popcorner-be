const express = require("express");
const cors = require("cors");

const {
  getUsers,
  getUserbyUsername,
  addUser,
  addCommunity,
  getCommunities,
  getEvents,
  addEvent,
} = require("./controllers/user.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", getUsers);

app.get("/communities", getCommunities);

app.get("/users/:username", getUserbyUsername);

app.get("/communities/:title/events", getEvents);

app.post("/users", addUser);

app.post("/communities", addCommunity);

app.post("/communities/:title/events", addEvent);

module.exports = app;
