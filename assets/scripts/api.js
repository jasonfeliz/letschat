
const getChatsApi = function(){
  console.log("we've reached the api for getting all chats....")
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

module.exports = {
  getChatsApi,
  sendMessageApi
}
