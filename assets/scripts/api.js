
const getChatsApi = function(){
  return $.ajax({
    method: "GET",
    url: 'http://localhost:3000/chats',
    headers: {
      Authorization: " Bearer 73c2e2e03975a06404af90803be346d9"
    }
  })
}

const sendMessageApi = function(data){
  return $.ajax({
    method:"POST",
    url: 'http://localhost:3000/chats',
    headers: {
      Authorization: " Bearer 73c2e2e03975a06404af90803be346d9"
    },
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
