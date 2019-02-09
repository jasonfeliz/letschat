const api = require('./api.js')
const helper = require('./helpers.js')
const apiUrl = require('./api-url.js')


module.exports = function(){
  const socket = io.connect(apiUrl);
  const chatlist = $('#chat-list')
  const message = $('input[name="chat-body"]')
  const typing = $('.typing')
  //emit message to the server
  $('#chat-form').submit(function(event){
    event.preventDefault()
    const dataObj = {
      "body":message.val()
    }
    api.sendMessageApi(dataObj)
    .then(function(data){
        socket.emit('send-message',{ message: data.chat.body, chatId:data.chat._id, username:data.username, currentUser:data.currentUser} )
    })
    .catch(console.error)

  })

  // message.on('keydown',function(){
  //   socket.emit('typing')
  // })
  //
  // socket.on('typing',function(){
  //   if(message.val().length != 0){
  //     typing.html('Someone cool is typing...')
  //   }else{
  //     typing.html('')
  //   }
  // })

  socket.on('send-message',function(data){
    const currentUser = ''
    const span = ''
    console.log(data)
    // const span = currentUser == data.owner.username ? `<span class="delete-message">X</span>` : ''
    chatlist.append(`
            <li>
              <div data-id="${data.chatId}">
                <span class="name">${data.username}: </span>
                <span>${data.message}</span>
                ${span}
              </div>
            </li>

      `)
      $('input[type="text"]').val('')
      helper.scrollToBottom()
  })
}
