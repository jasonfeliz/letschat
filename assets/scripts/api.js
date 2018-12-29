
const getChatsApi = function(){
  return $.ajax({
    method: "GET",
    url: 'http://localhost:3000/chats'
  })
}

const sendMessageApi = function(data){
  return $.ajax({
    method:"POST",
    url: 'http://localhost:3000/chats',
    data: data

  })
}

const signUpApi = function(data){
  return $.ajax({
    method:"POST",
    url: 'http://localhost:3000/sign-up',
    data: data
  })
}

const signInApi = function(data){
  return $.ajax({
    method:"POST",
    url: 'http://localhost:3000/sign-in',
    data: data
  })
}
module.exports = {
  getChatsApi,
  sendMessageApi,
  signUpApi,
  signInApi
}
