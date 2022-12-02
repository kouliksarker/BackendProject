const mongoose = require('mongoose')

const airLineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String
    }
}, {timestamps: true}) 

const Airline = new mongoose.model('Airline', airLineSchema)

module.exports = Airline