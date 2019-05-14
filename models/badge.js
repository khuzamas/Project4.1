const mongoose= require('mongoose')
const Schema= mongoose.Schema

const badgeSchema= new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    icon: {type: String, required: true},
    reward: {type: String, required: true}
})

const Badge= mongoose.model('Badge', badgeSchema)
module.exports= Badge