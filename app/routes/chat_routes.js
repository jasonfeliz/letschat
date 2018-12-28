const express = require('express')
const passport = require('passport')


const Chat = require('../models/chat.js')
const User = require('../models/user.js')
const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()


router.get('/chats', requireToken,function(req,res){
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

router.post('/chats', requireToken, function(req,res){
    req.body.owner = req.user.id
    const chat = Chat.create(req.body)
      chat.then(function(newChat){
        return User.findById(newChat.owner)
      })
      .then(function(user){
        return Promise.all([chat,user])
        .then(function(newChat){
          res.status(201).json( {
              chat: newChat[0],
              username: newChat[1].username
            })
        })
      })
      .catch(console.error)
})

module.exports = router
