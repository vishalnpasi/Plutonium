const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    author_id:{
        type:Number,
        required:true
    },
    author_name:String,
    age:Number,
    address:String
})

module.exports = mongoose.model('author',authorSchema)