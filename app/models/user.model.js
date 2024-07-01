// models/user.model.js
const { db } = require("../../firebase");
const { ref, get, query, orderByKey } = require("firebase/database");

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
const fetchUserName =(userName) => {
  if(!(userName)){
    return Promise.reject({
      status : 400,
      msg: 'Bad Request'
    });
  }
  const userName = ref(db, `users/${userName}`)

  return get(query(userName)).then((data) => {
    if(data.exists()){
      return data
        } else {
          return {}
        }
  })

}

module.exports {fetchUserName}


