const {postMessage, fetchChatById} = require("../models/messages.models")

exports.sendMessage = (req, res)=>{
    const {chat, msg, user} =  req.body
    postMessage(chat, msg, user).then(()=>{
        res.status(200).send({msg: "Comment sucessfully posted"});
    })
}

exports.getChatById = (req, res)=>{
    const {chats} =  req.params
    fetchChatById(chats).then((chat)=>{
        res.status(200).json(chat)
    })
}