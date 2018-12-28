const mongoose = require('mongoose')
const User = require('./user.js')

const chatSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})



module.exports = mongoose.model('Chat', chatSchema)
