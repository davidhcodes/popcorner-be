const express = require("express");
const cors = require("cors");
const { getUsers } = require("./controllers/user.controller");

const app = express();
app.use(cors());

app.get("/users", getUsers);

module.exports = app;
