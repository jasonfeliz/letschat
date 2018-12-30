const api = require('./api.js')
const helper = require('./helpers.js')
module.exports = function(){
  const socket = io.connect('http://localhost:3000');
  const chatlist = $('#chat-list')


  //emit message to the server
  $('#chat-form').submit(function(event){
    event.preventDefault()
    const message = $('input[name="chat-body"]').val()
    const dataObj = {
      "body":message
    }
    api.sendMessageApi(dataObj)
    .then(function(data){
      console.log(data);
        socket.emit('send-message',{ message: data.chat.body, username:data.username } )
    })
    .catch(console.error)

  })

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
