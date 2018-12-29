const express = require('express')
const passport = require('passport')

const requireToken = passport.authenticate('bearer', { session: false })
const requireAuthentication = require('../../lib/auth_middleware.js')

const router = express.Router()


router.get('/',function(req,res){
  if(req.isAuthenticated()){
    res.redirect('/home')
  }else{
    res.render('index')
  }
})

router.get('/about', requireAuthentication(), function(req,res){

  res.render('about')
})

router.get('/home', requireAuthentication(), function(req,res){
    res.render('home')
})

router.get('*', function (req, res) {
  res.render('404')
})


module.exports = router
