const mongoose = require("mongoose")

const schema = mongoose.Schema({
    creator: String,
    name: String,
    location: [Number],
    country: String,
    label: String
})

module.exports = mongoose.model("InterestPoint", schema)