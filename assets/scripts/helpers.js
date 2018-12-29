'use strict'
//some helper functions

//this sets scroll of the chat canvas to the bottom, so user always sees...
//...most recent messages after send a new message or loading the page
const scrollToBottom = function(){
    let element = $('#chat-canvas');
    element.animate({ scrollTop: element.prop("scrollHeight")}, 1000);
}


module.exports = {
  scrollToBottom
}
