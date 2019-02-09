'use strict'
//some helper functions

//this sets scroll of the chat canvas to the bottom, so user always sees...
//...most recent messages after send a new message or loading the page
const scrollToBottom = function(){
    let element = $('#chat-canvas');
    element.animate({ scrollTop: element.prop("scrollHeight")}, 1000);
}

const displayMessage = function(targetId,message){
  $(`#${targetId}`).text(message)
  $(`#${targetId}`).css('background','#e6fff4')
  $(`#${targetId}`).css('color','#52a453')
  $(`#${targetId}`).css('padding', '15px 5px')
  setTimeout(function(){
    $(`#${targetId}`).removeAttr("style").html("")
  },4000)
}

const displayErrorMessage = function(targetId,message){
  $(`#${targetId}`).text(message)
  $(`#${targetId}`).css('background','rgb(255, 230, 230)')
  $(`#${targetId}`).css('color','rgb(213, 1, 1)')
  $(`#${targetId}`).css('padding', '15px 5px')
  setTimeout(function(){
    $(`#${targetId}`).removeAttr("style").html("")
  },4000)
}
module.exports = {
  scrollToBottom,
  displayMessage,
  displayErrorMessage
}
