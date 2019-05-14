const mongoose= require('mongoose')
const Schema= mongoose.Schema

const exerciseSchema= new Schema({
    name: {type: String, required: true, unique: true},
    sets: {type: String, required: true},
    repetition: {type: String, required: true},
    image: {type: String, required: true},
    reward: {type: Number}
})

const Exercise = mongoose.model('Exercise', exerciseSchema)
module.exports = Exercise

