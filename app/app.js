const express = require("express");
const cors = require("cors");
const { getUsers } = require("./controllers/user.controller");

const app = express();
app.use(cors());

app.get("/users", getUsers);

app.get("/users/:id", gerUsersId)

module.exports = app;
