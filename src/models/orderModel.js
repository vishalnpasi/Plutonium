const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = mongoose.Schema({
    userId: {
        type:ObjectId,
        ref:'newUser'
    },
	productId:{
        type:ObjectId,
        ref:'product'
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: String
})

module.exports = mongoose.model('order',orderSchema)