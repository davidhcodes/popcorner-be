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
exports.fetchUserId = (id) => {
  if (!id) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request",
    });
  }
  const userId = ref(db, `users/${id}`);

  return get(query(userId)).then((data) => {
    if (data.exists()) {
      return data;
    } else {
      return {};
    }
  });
};

exports.addNewUser = (username, avatar, firstName, lastName, email, dateOfBirth, interests) => {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, "users");
    const newUserRef = push(usersRef);

    set(newUserRef, {
      username,
      avatar,
      firstName,
      lastName,
      email,
      dateOfBirth,
      interests,
    })
      .then(() => {
        const newUserId = newUserRef.key;
        resolve(newUserId);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
