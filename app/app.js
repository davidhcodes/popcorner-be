const express = require("express");
const cors = require("cors");
const { saveCinemasToFirebase } = require("./controllers/saveCinema.controller");
const { getCinemas } = require("./controllers/getCinemas.controller");
const { sendMessage, getChatById } = require("./controllers/messages.controller");
const {
  getUsers,
  getUserbyEmail,
  addUser,
  addCommunity,
  getCommunities,
  getEvents,
  getEvent,
  addEvent,
  addPost,
  addComment,
  updateUserGroups,
  deleteUserGroup,
  addMember,
  addCommunityToUser,
  addEventToUser,
} = require("./controllers/user.controller");
const { getLocations } = require("./controllers/geocode.controller");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", getUsers);

app.get("/communities", getCommunities);

app.get("/users/:email", getUserbyEmail);

app.get("/communities/:title/events", getEvents);

app.get("/communities/:title/events/:eventName", getEvent);

app.get("/cinemas/:location", getCinemas);

app.get("/messages/:chats", getChatById);

app.get("/geolocation/:address", getLocations);

app.post("/users", addUser);

app.post("/communities", addCommunity);

app.post("/communities/:title/events", addEvent);

app.post("/cinemas", saveCinemasToFirebase);

app.post("/messages", sendMessage);

app.post("/communities/:title/posts", addPost);

app.post("/communities/:title/posts/:post/comments", addComment);

app.patch("/users/:email/chat", updateUserGroups);

app.delete("/users/:email/chat", deleteUserGroup);

app.post("/communities/:title/", addMember);

app.post("/users/:user/communities", addCommunityToUser);

app.post("/users/:user/events", addEventToUser);
module.exports = app;
