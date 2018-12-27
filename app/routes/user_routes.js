const express = require('express')
// jsonwebtoken docs: https://github.com/auth0/node-jsonwebtoken
const crypto = require('crypto')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
// bcrypt docs: https://github.com/kelektiv/node.bcrypt.js
const bcrypt = require('bcrypt')

// see above for explanation of "salting", 10 rounds is recommended
const bcryptSaltRounds = 10


const User = require('../models/user.js')

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()


// router.get('/sign-up',function(req, res){
//     const credentials = req.body.credentials
//     Promise.resolve(credentials)
//       .then(function(credentials){
//         if(!credentials || !credentials.password) {
//           res.status(400).json({message: 'missing credentials'})
//         }else{
//           return credentials
//         }
//       })
//       .then(function(credentials))
// })

module.exports = router
