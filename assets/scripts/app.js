const chat = require('./chat.js')
const events = require('./events.js')
$(function(){


  chat()

  events.onGetChats()

})
