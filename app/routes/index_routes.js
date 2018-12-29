const express = require('express')
const passport = require('passport')

const requireToken = passport.authenticate('bearer', { session: false })
const authenticateRequest = passport.authenticate('local', {failureRedirect: '/' })

const router = express.Router()


router.get('/',function(req,res){
  if(req.isAuthenticated()){
    res.redirect('/home')
  }else{
    res.render('index')
  }
})

router.get('/about',function(req,res){
  res.render('about')
})
router.get('/home', function(req,res){
  if(req.isAuthenticated()){
    res.render('home')
  }else{
    res.redirect('/')
  }

})
router.get('*', function (req, res) {
  res.render('404')
})


module.exports = router
