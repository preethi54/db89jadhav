const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
    name:String,
    color:String,
    size:String,
})
module.exports = mongoose.model("bird", birdSchema)