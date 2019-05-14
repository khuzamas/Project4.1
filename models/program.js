const mongoose= require('mongoose')
const Schema= mongoose.Schema

const programSchema= new Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
    image: {type: String, required: true},
    reward: {type: String}
})


const Program= mongoose.model('Program', programSchema)
module.exports= Program

