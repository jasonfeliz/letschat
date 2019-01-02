const api = require('./api.js')
const helper = require('./helpers.js')
module.exports = function(){
  const socket = io.connect('http://localhost:3000');
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
      console.log(data);
        socket.emit('send-message',{ message: data.chat.body, username:data.username } )
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
    chatlist.append(`
            <li>
              <div>
                <span class="name">${data.username}: </span>
                <span>${data.message}</span>
                <span class="delete-message">X</span>
              </div>
            </li>

      `)
      $('input[type="text"]').val('')
      helper.scrollToBottom()
  })
}
