const events = require('./events.js')

$(function(){


  const socket = io.connect('http://localhost:3000');

  const something = $('#something')

  //emit something
  something.click(function(){
    socket.emit('something', { message: "Something just happened" })
  })

  socket.on('something',function(data){
    something.append(`<p>${data.message}</p>`)
  })
})
