const {db} = require("../../firebase");
const { ref, set, get, query, orderByKey} = require("firebase/database");

exports.postMessage = (chat, msg, user)=> {
    const createdAt = Date.now()
    const chatRef = ref(db, `messages/${chat}/${createdAt + user}`);
    
    set(chatRef, {msg: msg,
        created_At: createdAt,
        author: user
    })
}
exports.fetchChatById = (chat)=>{
    const chatRef = ref(db, `messages/${chat}`);
    return get(query(chatRef, orderByKey())).then((data)=>{
        if(data.exists()){
            const chats = [];
            const chat = data.val();
            console.log(chat)
            chats.push(chat)
            return chats
        } else {
            return []
        }
    })

}