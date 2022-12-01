const mongoose = require('mongoose')

const airLineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: string
    }
}, {timestamps: true}) 

const Airline = new mongoose.model('Airline', airLineSchema)

module.exports = Airline