const express = require("express");
const cors = require("cors");

const { getUsers, getUserbyId, addUser } = require("./controllers/user.controller");



const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", getUsers);

app.get("/users/communities", getCommunities)

app.get("/users/:id", getUserbyId);

app.post("/users", addUser);

module.exports = app;
