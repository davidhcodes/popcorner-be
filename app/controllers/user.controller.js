const {
  getAllUsers,
  fetchUser,
  addNewUser,
  fetchCommunities,
  addNewCommunity,
  fetchEvents,
  addNewEvent,
  addNewPost,
} = require("../models/user.model");

exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

exports.getCommunities = (req, res) => {
  fetchCommunities().then((communities) => {
    res.status(200).json(communities);
  });
};

exports.getUserbyEmail = (req, res) => {
  fetchUser(req.params.email).then((user) => {
    res.status(200).send({ user });
  });
};

exports.addUser = (req, res) => {
  const { username, avatar, firstName, lastName, email, dateOfBirth, interests, password } = req.body;
  addNewUser(username, avatar, firstName, lastName, email, dateOfBirth, interests, password).then((userId) => {
    res.status(201).send({ msg: `user ${userId} created` });
  });
};

exports.addCommunity = (req, res) => {
  const { title, description, logo, moderators, members, memberCount } = req.body;
  addNewCommunity(title, description, logo, moderators, members, memberCount).then((communityName) => {
    res.status(201).send({ msg: `community ${communityName} created` });
  });
};

exports.getEvents = (req, res) => {
  fetchEvents(req.params.title).then((events) => {
    res.status(200).json(events);
  });
};

exports.addEvent = (req, res) => {
  const community = req.params.title;
  const { title, description, logo, date, time, venue, moderators } = req.body;
  addNewEvent(community, title, description, logo, date, time, venue, moderators).then((eventName) => {
    res.status(201).send({ msg: `event ${eventName} created` });
  });
};

exports.addPost = (req, res) => {
  const community = req.params.title;
  const { title, body, author, commentCount } = req.body;
  addNewPost(community, title, body, author, commentCount).then((post) => {
    res.status(201).send({ msg: `Post ${post} created` });
  });
};
