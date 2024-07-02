const express = require("express");
const cors = require("cors");

const { getUsers, getUserbyUsername, addUser, addCommunity, getCommunities } = require("./controllers/user.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", getUsers);

app.get("/communities", getCommunities);

app.get("/users/:username", getUserbyUsername);

app.post("/users", addUser);

app.post("/communities", addCommunity);

module.exports = app;
