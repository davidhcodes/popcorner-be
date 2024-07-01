const express = require("express");
const cors = require("cors");
const { getUsers, getUserName } = require("./controllers/user.controller");

const app = express();
app.use(cors());

app.get("/users", getUsers);

app.get("/users/:id", getUserName)

app.get("/users/communities", getCommunities)

module.exports = app;
