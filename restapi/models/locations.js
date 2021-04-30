<<<<<<< HEAD
const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: [Number],
    state: String,
    country: String
})

=======
const mongoose = require("mongoose")


const schema = mongoose.Schema({
    user: String,
    location: [Number],
    state: String,
    country: String,
    fullName: String
})

>>>>>>> 4ce71dd43fd61abe375d65537d59872c98507278
module.exports = mongoose.model("Location", schema)