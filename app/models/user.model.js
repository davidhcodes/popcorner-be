// models/user.model.js
const { db } = require("../../firebase");
const { ref, get, query, orderByKey, push, set } = require("firebase/database");

exports.getAllUsers = () => {
  const usersRef = ref(db, "users");

  return get(query(usersRef, orderByKey())).then((data) => {
    if (data.exists()) {
      const users = [];
      data.forEach((user) => {
        users.push(user);
      });
      return users;
    } else {
      return [];
    }
  });
};
exports.fetchUser = (username) => {
  if (!username) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request",
    });
  }
  const userRef = ref(db, `users/${username}`);

  return get(query(userRef)).then((data) => {
    if (data.exists()) {
      return data;
    } else {
      return {};
    }
  });
};

exports.addNewUser = (username, avatar, firstName, lastName, email, dateOfBirth, interests) => {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, `users/${username}`);

    if (!avatar) {
      avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UdkG68P9AHESMfKJ-2Ybi9pfnqX1tqx3wQ&s";
    }

    set(usersRef, {
      username,
      avatar,
      firstName,
      lastName,
      email,
      dateOfBirth,
      interests,
    })
      .then(() => {
        resolve(username);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.fetchCommunities = (communities) => {
  if (!communities) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request",
    });
  }
  const communitiesRef = ref(db, "communities");
  return get(query(communitiesRef)).then((data) => {
    if (data.exists()) {
      const communities = [];
      data.forEach((community) => {
        communities.push(community);
      });
      return communities;
    } else {
      return [];
    }
  });
};

exports.addNewCommunity = (author, commentCount, votes, comments) => {
  return new Promise((resolve, reject) => {
    const communityRef = ref(db, "communities");
    const newCommunityRef = push(communityRef);

    set(newCommunityRef, {
      author,
      commentCount,
      votes,
      comments,
    })
      .then(() => {
        const newCommunityId = newCommunityRef.key;
        resolve(newCommunityId);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
