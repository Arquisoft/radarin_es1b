const mongoose = require("mongoose")


const schema = mongoose.Schema({
    from: String,
    to: String,
    msg: String
})

module.exports = mongoose.model("Chat", schema)