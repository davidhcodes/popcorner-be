const { getAllUsers, fetchUser, addNewUser, fetchCommunities } = require("../models/user.model");

exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

exports.getCommunities = (req, res) => {
  fetchCommunities(req.params.communities).then((communities) => {
    res.status(200).json(communities);
  });
};

exports.getUserbyUsername = (req, res) => {
  fetchUser(req.params.id).then((user) => {
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
  const { author, commentCount, votes, comments } = req.body;
  addNewCommunity(author, commentCount, votes, comments).then((communityName) => {
    res.status(201).send({ msg: `community ${communityName} created` });
  });
};
