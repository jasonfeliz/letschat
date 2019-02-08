const chat = require('./chat.js')
const events = require('./events.js')
const apiUrl = require('./api-url.js')

$(function(){


  chat()
  $('#chat-list').ready(events.onGetChats)


  $('#sign-up').on('submit',events.onSignUp)
  $('#sign-in').on('submit',events.onSignIn)
})
