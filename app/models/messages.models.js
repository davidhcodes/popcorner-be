const {db} = require("../../firebase");
const { ref, push} = require("firebase/database");

exports.postMessage = (chat, msg, user)=> {
    const messageRef = ref(db, `messages/${chat}`);

    push(messageRef, {msg: msg,
        created_At: Date.now(),
        author: user
    })
}