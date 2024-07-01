
const { getAllUsers, fetchUserId, fetchCommunities } = require("../models/user.model");


exports.getUsers = (req, res) => {
  getAllUsers().then((users) => {
    res.status(200).json(users);
  });
};

}
exports.getCommunities = (req, res) => {
  fetchCommunities(req.params.communities).then((communities) => {
    res.status(200).json(communities)
  })
}


exports.getUserbyId = (req, res) => {
  console.log(req.params.id);
  fetchUserId(req.params.id).then((user) => {
    res.status(200).send({ user });
  });
};
