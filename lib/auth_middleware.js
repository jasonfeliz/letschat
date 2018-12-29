'use strict'
const requireAuthentication =  function(){
  return function(req, res, next){
      if(req.isAuthenticated()){return next()}
      res.redirect('/')
  }
}

module.exports = requireAuthentication
