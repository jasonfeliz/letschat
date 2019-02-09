const express = require('express')
// jsonwebtoken docs: https://github.com/auth0/node-jsonwebtoken
const crypto = require('crypto')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
// bcrypt docs: https://github.com/kelektiv/node.bcrypt.js
const bcrypt = require('bcryptjs')
const bcryptSaltRounds = 10


const User = require('../models/user.js')
const store = require('../../assets/scripts/store.js')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const authenticateRequest = passport.authenticate('local', {failureRedirect: '/' })
const requireToken = passport.authenticate('bearer', { session: false })
// instantiate a router (mini app that only handles routes)
const router = express.Router()


router.post('/sign-up',function(req, res){
    const credentials = req.body
    //create promise chain so we can handle each result
    Promise.resolve(credentials)
    //do some validations
      .then(credentials => {
        if(!credentials || !credentials.password){
          res.status(400).json({message: "not valid credentials"})
        }
      })
      //if form is valid, hash the incoming password
      .then(function(){
        return bcrypt.hash(credentials.password,bcryptSaltRounds)
      })
      //then return the object to be created in the db
      .then(function(hash){
        return {
          username: credentials.username,
          hashedPassword: hash,
        }
      })
      //then create user
      .then(function(user){
        return User.create(user)
      })
      //send user object of the user that was just ceated
      .then(function(user){
        res.status(201).json( {user: user.toObject()})
      })
      .catch(err => res.status(400).send(err))
})

router.post('/sign-in', authenticateRequest, function(req, res){
    const user = req.user
    const pw = req.body.password
    Promise.resolve(user)
      .then(function(){
          const token = crypto.randomBytes(16).toString('hex')
          user.token = token
          return user.save()
      })
      .then(user => {
        req.login(user, function(){
          res.redirect(`home`)
        })
      })
})

router.post('/sign-out', function (req, res){
  req.session.destroy();
  res.send()
});

module.exports = router
