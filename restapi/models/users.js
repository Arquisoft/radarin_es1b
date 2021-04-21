const mongoose = require("mongoose")


const schema = mongoose.Schema({
    webId: String,
    nombre: String,
    admin: String
})


module.exports = mongoose.model("User", schema)