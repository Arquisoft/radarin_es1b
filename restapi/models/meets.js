const mongoose = require("mongoose")

const schema = mongoose.Schema({
    creator: String,
    name: String,
    location: [Number],
    state: String,
    date: String,
    time: String,
    country: String,
    attendances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = mongoose.model("Meet", schema)