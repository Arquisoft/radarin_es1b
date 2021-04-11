const mongoose = require("mongoose")


const schema = mongoose.Schema({
    webId: String,
    name: String
})

module.exports = mongoose.model("User", schema)