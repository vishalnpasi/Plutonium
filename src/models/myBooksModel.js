const mongoose = require('mongoose')

const myBooks = mongoose.Schema({
    bookName:String,
    authorName:String,
    prices:{
        indianPrice:String,
        europePrice:String
    },
    year:{
        type:Number,
        default:2021
    },
    tags:[String],
    totalPages:Number,
    stockAvailable:Boolean
});

module.exports = mongoose.model('myBooks',myBooks)