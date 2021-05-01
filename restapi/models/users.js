const mongoose = require("mongoose")


const schema = mongoose.Schema({
    webId: String,
    nombre: String,
    admin: String,
    status: String,
    ban: String,
    time : { type : Date, default: Date.now }
})


module.exports = mongoose.model("User", schema)