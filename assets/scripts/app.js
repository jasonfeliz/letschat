const chat = require('./chat.js')
const events = require('./events.js')
$(function(){


  chat()
  $('#chat-list').ready(events.onGetChats)


  $('#sign-up').on('submit',events.onSignUp)
  $('#sign-in').on('submit',events.onSignIn)
})
