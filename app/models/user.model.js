// models/user.model.js
const { db } = require("../../firebase");
const { ref, get, query, orderByKey, push, set } = require("firebase/database");

exports.getAllUsers = () => {
  const usersRef = ref(db, "users");

  return get(query(usersRef, orderByKey())).then((data) => {
    if (data.exists()) {
      const users = [];
      data.forEach((userData) => {
        const user = userData.val();
        const userObj = {};
        userObj[userData.key] = user;
        users.push(userObj);
      });
      return users;
    } else {
      return [];
    }
  });
};
exports.fetchUser = (email) => {
  if (!email) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request",
    });
  }
  const userRef = ref(db, `users/${email}`);

  return get(query(userRef)).then((data) => {
    if (data.exists()) {
      return data;
    } else {
      return {};
    }
  });
};

exports.addNewUser = (username, avatar, firstName, lastName, email, dateOfBirth, interests, password) => {
  return new Promise((resolve, reject) => {
    const usersRef = ref(db, `users/${email}`);

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
      password,
    })
      .then(() => {
        resolve(email);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.fetchCommunities = () => {
  const communitiesRef = ref(db, "communities");
  return get(query(communitiesRef, orderByKey())).then((data) => {
    if (data.exists()) {
      const communities = [];
      data.forEach((communityData) => {
        const community = communityData.val();
        const communityObj = {};
        communityObj[communityData.key] = community;
        communities.push(communityObj);
      });
      return communities;
    } else {
      return [];
    }
  });
};

exports.addNewCommunity = (title, description, logo, moderators, members, memberCount) => {
  return new Promise((resolve, reject) => {
    if (!logo) {
      logo =
        "https://img.freepik.com/free-psd/trees-illustration-isolated_23-2151172259.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717891200&semt=ais_user";
    }
    const communityRef = ref(db, `communities/${title}`);
    set(communityRef, {
      title,
      description,
      logo,
      moderators,
      members,
      memberCount,
    })
      .then(() => {
        resolve(title);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.fetchEvents = (title) => {
  if (!title) {
    return Promise.reject({
      status: 400,
      msg: "Bad Request",
    });
  }
  const eventRef = ref(db, `communities/${title}/events`);
  return get(query(eventRef, orderByKey())).then((data) => {
    if (data.exists()) {
      const events = [];
      data.forEach((eventData) => {
        const event = eventData.val();
        const eventObj = {};
        eventObj[eventData.key] = event;
        events.push(eventObj);
      });
      return events;
    } else {
      return [];
    }
  });
};

exports.addNewEvent = (community, title, description, logo, date, time, venue, moderators) => {
  return new Promise((resolve, reject) => {
    const eventRef = ref(db, `communities/${community}/events/${title}`);
    set(eventRef, {
      title,
      description,
      logo,
      date,
      time,
      venue,
      moderators,
    }).then(() => {
      resolve(title);
    });
  });
};

exports.addNewPost = (community, title, body, author, commentCount) => {
  return new Promise((resolve, reject) => {
    const postRef = ref(db, `communities/${community}/posts/${title}`);
    set(postRef, {
      title,
      body,
      author,
      commentCount,
    }).then(() => {
      resolve(title);
    });
  });
};
