const passport = require('passport')
const bcrypt = require('bcryptjs')

const BearerStrategy = require('passport-http-bearer').Strategy
const LocalStrategy = require('passport-local').Strategy
const User = require('../app/models/user.js')


//create new b bearer Strategy which gets token passed over
//http header since all of our actions will be called over ajax/api on client side
const bearerStrategy = new BearerStrategy(
  function(token, done){
    User.findOne({token: token}, function(err, user){
      if(err){ return done(err)}
      return done(null, user, { scope: 'all' })
    })
  }
)

//create local strategy which validates incoming username and password
const localStrategy = new LocalStrategy(
  function(username,password,done){
    User.findOne( {username:username}, function(err, user){
      if(!user){return done(null, false)}

      bcrypt.compare(password, user.hashedPassword, function(err,isValid){
        if(err){ return done(err)}
        if(!isValid){ return done(null,false)}
        return done(null, user)
      })

    })
  }
)

// serialize and deserialize functions are used by passport under
// the hood to determine what `req.user` should be inside routes
passport.serializeUser((user, done) => {
  // we want access to the full Mongoose object that we got in the
  // strategy callback, so we just pass it along with no modifications
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

//use strategies
passport.use(bearerStrategy)
passport.use(localStrategy)
//export initialized passport middleware
module.exports = passport.initialize()
