const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    mobile : String,
    // mobile : {
    //     type:String ,
    //     unique:true,
    //     required:true
    // },
    emaiIld : String,
    gender : {
        type : String ,
        enum : ["male","female","LG8TO" ] 
    } ,
    age : Number,

},{timestamps:true})

module.exports = mongoose.model('User',userSchema) //users 