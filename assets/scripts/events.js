const api = require('./api.js')


const onGetChats = function(){
  api.getChatsApi()
    // .then(console.log)
    // .catch(console.error)
}



module.exports = {
  onGetChats
}
