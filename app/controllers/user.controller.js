const { getAllUsers, fetchUserId, addNewUser } = require("../models/user.model");

exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

exports.getUserbyId = (req, res) => {
  fetchUserId(req.params.id).then((user) => {
    res.status(200).send({ user });
  });
};

exports.addUser = (req, res) => {
  const { username, avatar, firstName, lastName, email, dateOfBirth, interests } = req.body;
  addNewUser(username, avatar, firstName, lastName, email, dateOfBirth, interests).then((userId) => {
    res.status(201).send({ msg: `user ${userId} created` });
  });
};
