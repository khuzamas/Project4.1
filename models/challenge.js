const mongoose = require('mongoose');
const Schema = mongoose.Schema;



// Create Schema
const ChallengeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    reward: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }

});

const Model = mongoose.model('Challenge', ChallengeSchema);
module.exports = Model