const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
 email : { type: String, required: true, unique : true},
 username : { type: String, required: true, unique : true},
 password : { type: String, required: true},
 dateofbirth: {
  type: Date
  },
  friend: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  icon: {type: String},
  heigh: {type: String},
  weight: {type: String},
  activity: {type: String},
  goal: {type: String},
  challenges: [{ type: Schema.Types.ObjectId, ref: 'Challenge' }],
  badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
  programs: [{ type: Schema.Types.ObjectId, ref: 'Program' }],
  points: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})


userSchema.pre('save',function(next){
    let user = this

    if(user.password && user.isModified('password')){
        
      bcrypt.hash(user.password, saltRounds, (err, hash)=>{
        if(err){ return next()}

        user.password = hash
        next()
      })
    }

})


userSchema.methods.verifyPassword = (plainPassword, hashedPassword, cb) => {

 bcrypt.compare(plainPassword, hashedPassword, (err, response) => {
   if(err) { 
     return cb(err) 
   }
   return cb(null, response)
 })
}

const User = mongoose.model('User', userSchema)
module.exports = User