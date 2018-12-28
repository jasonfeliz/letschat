const api = require('./api.js')


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
        socket.emit('send-message',{ message: message, } )
    })
    .catch(console.error)

  })

  socket.on('send-message',function(data){
    chatlist.append(`
            <li>
              <div>
                <span>${data.username}: </span>
                <span>${data.message}</span>
                <span>x</span>
              </div>
            </li>

      `)
  })
}
