const express = require('express')
const passport = require('passport')


const Chat = require('../models/chat.js')
const User = require('../models/user.js')
const requireToken = passport.authenticate('bearer', { session: false })
const requireAuthentication = require('../../lib/auth_middleware.js')


const router = express.Router()


router.get('/chats',requireAuthentication(),function(req,res){
  const chat = Chat.find().populate('owner')
    chat.then(function(chats){
      return chats.map(function(chat){
        return chat.toObject()
      })
    })
    .then(function(chats){
      res.status(200).json({chats: chats, currentUser:req.user.username})
    })
    .catch(console.error)
})

router.post('/chats', requireAuthentication(), function(req,res){
    req.body.owner = req.session.passport.user._id
    const chat = Chat.create(req.body)
      chat.then(function(newChat){
        return User.findById(newChat.owner)
      })
      .then(function(user){
        return Promise.all([chat,user])
        .then(function(newChat){
          res.status(201).json( {
              chat: newChat[0],
              currentUser: req.user.username,
              username: newChat[1].username
            })
        })
      })
      .catch(console.error)
})

router.delete('/chats/:id', requireAuthentication(), function(req,res){
  //cache current user id and messgae id
  const currentUserId = req.session.passport.user._id
  const messageId = req.params.id
  //get chat data
  Chat.findById(messageId)
    .then((chat) => {
      //get chat owner id
      //compare owner id to current session user id
      //if match, remove the chat
      //else, send error message to client
      if(chat.owner == currentUserId){
        chat.remove()
        res.send("success")
      }else{
        res.send("failed")
      }
    })
    .catch(console.err)


})

module.exports = router
