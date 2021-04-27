const mongoose = require("mongoose")

const schema = mongoose.Schema({
    creator: String,
    name: String,
    location: [Number],
    state: String,
    date: String,
    time: String,
    country: String,
    attendances: [String]
})

module.exports = mongoose.model("Meet", schema)