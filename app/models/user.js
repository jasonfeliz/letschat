const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    token: String
  },
  {
    timestamps:true,
    toObject: {
      transform: function(_doc,user){
          delete user.hashedPassword
          return user
      }
    }
  }
)

module.exports = mongoose.model("User", userSchema)
