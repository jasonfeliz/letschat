const api = require('./api.js')
const helper = require('./helpers.js')

const onGetChats = function(){
  api.getChatsApi()
    .then(function(data){
      const chatlist = $('#chat-list')
      let content = ""
      let span = ""
      const currentUser = data.currentUser
      data.chats.forEach(function(e){
        span = currentUser == e.owner.username ? `<span class="delete-message">X</span>` : ''
        content += `<li>
                  <div data-id="${e._id}">
                    <span class="name">${e.owner.username}: </span>
                    <span>${e.body}</span>
                    ${span}
                  </div>
                </li>`
      })
      chatlist.html(content)

    })
    .then(helper.scrollToBottom)
    .catch(console.error)
}


const onSignUp = function(event){
  event.preventDefault()
  const dataObj = {}
  const formData = $(this).serializeArray()
  formData.forEach(function(e){
    dataObj[e.name] = e.value
  })
  api.signUpApi(dataObj)
    .then(function(){
      $('input').val('')
      $('#auth-messages').text('You have successfully signed up. Now log in so we can chat!')
    })
    .catch(console.error)
}

const onSignIn = function(event){
  event.preventDefault()
  const dataObj = {}
  const formData = $(this).serializeArray()
  formData.forEach(function(e){
    dataObj[e.name] = e.value
  })
  api.signInApi(dataObj)

}

const onSignOut = function(event){
  event.preventDefault()
  api.signOutApi()
    .then(() => {
      location.reload();
    })

}



module.exports = {
  onGetChats,
  onSignUp,
  onSignIn,
  onSignOut
}
