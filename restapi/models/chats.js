const mongoose = require("mongoose")


const schema = mongoose.Schema({
    from: String,
    to: String,
    msg: String,
    time : { type : Date, default: Date.now }
})

module.exports = mongoose.model("Chat", schema)