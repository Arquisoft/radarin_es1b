const mongoose = require("mongoose")


const schema = mongoose.Schema({
    webId: String,
    nombre: String,
    admin: String,
    status: String,
    ban: String
})


module.exports = mongoose.model("User", schema)