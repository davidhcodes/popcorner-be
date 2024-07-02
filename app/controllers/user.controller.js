const {
  getAllUsers,
  fetchUser,
  addNewUser,
  fetchCommunities,
  addNewCommunity,
  fetchEvents,
  addNewEvent,
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

exports.getUserbyUsername = (req, res) => {
  fetchUser(req.params.username).then((user) => {
    res.status(200).send({ user });
  });
};

exports.addUser = (req, res) => {
  const { username, avatar, firstName, lastName, email, dateOfBirth, interests } = req.body;
  addNewUser(username, avatar, firstName, lastName, email, dateOfBirth, interests).then((userId) => {
    res.status(201).send({ msg: `user ${userId} created` });
  });
};

exports.addCommunity = (req, res) => {
  const { title, description, logo, moderators } = req.body;
  addNewCommunity(title, description, logo, moderators).then((communityName) => {
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
