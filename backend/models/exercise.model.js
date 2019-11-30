const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    date: { type: String, required: true }
}, { timestamp: true })

const Exercise = mongoose.model('Exercise', exerciseSchema)
module.exports = Exercise