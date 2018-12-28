const express = require('express')
const passport = require('passport')


const Chat = require('../models/chat.js')
const requireToken = passport.authenticate('bearer', { session: false })


const router = express.Router()


router.get('/chats', function(req,res){
  Chat.find()
    .then(function(chats){
      return chats.map(function(chat){
        return chat.toObject()
      })
    })
    .then(function(chats){
      res.status(200).json({ chat: chats })
    })
})

router.post('/chats', requireToken, function(req,res){
    req.body.owner = req.user.id
    Chat.create(req.body)
      .then(function(newChat){
        res.status(201).json({chat: newChat.toObject()})
      })
})

module.exports = router
