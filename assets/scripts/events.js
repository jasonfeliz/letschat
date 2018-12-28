const api = require('./api.js')


const onGetChats = function(){
  api.getChatsApi()
    .then(function(data){
      const chatlist = $('#chat-list')
      let content = ""
      let username = ""
      const currentUser = data.currentUser
      data.chats.forEach(function(e){
        username = currentUser == e.owner.username ? "me" : e.owner.username
        content += `<li>
                  <div>
                    <span>${username}: </span>
                    <span>${e.body}</span>
                    <span>x</span>
                  </div>
                </li>`
      })
      chatlist.html(content)

    })
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

module.exports = {
  onGetChats,
  onSignUp,
  onSignIn
}
