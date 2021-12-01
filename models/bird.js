const mongoose = require("mongoose")
const birdSchema = mongoose.Schema({
    //name:String,
    name:{
        type:String,
        minLength: 3,
        maxLength: 200
    },
    //color:String,
    color:{
        type:String,
        minLength: 3,
        maxLength: 200
    },
    //size:String,
    size:{
        type:String,
        minLength: 3,
        maxLength: 200
    }
})
module.exports = mongoose.model("bird", birdSchema)