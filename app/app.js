const express = require("express");
const cors = require("cors");

const { getUsers, getUserbyId } = require("./controllers/user.controller");


const app = express();
app.use(cors());

app.get("/users", getUsers);

app.get("/users/communities", getCommunities)

app.get("/users/:id", getUserbyId);

module.exports = app;
