const apiUrl = require('./api-url.js')
const getChatsApi = function(){
  return $.ajax({
    method: "GET",
    url: `${apiUrl}/chats`
  })
}

const sendMessageApi = function(data){
  return $.ajax({
    method:"POST",
    url: `${apiUrl}/chats`,
    data: data

  })
}

const signUpApi = function(data){
  return $.ajax({
    method:"POST",
    url: `${apiUrl}/sign-up`,
    data: data
  })
}

const signInApi = function(data){
  return $.ajax({
    method:"POST",
    url: `${apiUrl}/sign-in`,
    data: data
  })
}
module.exports = {
  getChatsApi,
  sendMessageApi,
  signUpApi,
  signInApi
}
