const express = require('express')
const passport = require('passport')

const requireToken = passport.authenticate('bearer', { session: false })
const authenticateRequest = passport.authenticate('local', {failureRedirect: '/' })

const router = express.Router()


router.get('/',function(req,res){
  res.render('index')
})

router.get('/about',function(req,res){
  res.render('about')
})
router.get('/home', function(req,res){
  res.render('home')
})
router.get('*', function (req, res) {
  res.render('404')
})


module.exports = router
