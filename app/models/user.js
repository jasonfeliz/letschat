const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique : true
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

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model("User", userSchema)
