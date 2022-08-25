const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:String,
    category:String,
    price:{
        type:Number,
        required:true
    } //mandatory property
})

module.exports = mongoose.model('product',productSchema)