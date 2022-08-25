const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')
const productModel = require('../models/productModel')

const createOrder= async function (req, res) {
    
    let userId = req.body.userId
    let productId = req.body.productId
    if(!userId){
         return res.send({msg:"PLZ Enter UserId"})
    }
    else if(!productId){
        return  res.send({msg:"PLZ Enter ProductId"})
    }
    let specificUser = await userModel.findById(userId)
    if(!specificUser){
        return res.send({msg:"User Doesn't Present"})
    }
    let specificProduct = await productModel.findById(productId)
    if(! specificProduct){
         res.send({msg:"Product Doesn't Present"})
    }
    else if(req.headers.isfreeappuser === 'true')
    {
        let orderData = req.body
        orderData.amount = 0;
        orderData.isFreeAppUser = true
        await orderModel.create(orderData)
        return res.send({msg:'Order Purchesed Successfully'})
    }
    else {
        let userBalance = specificUser.balance
        let productPrice = specificProduct.price
        if(productPrice<=userBalance)
        {
            let remainBalance = userBalance-productPrice;
            await userModel.updateOne({_id:userId},{$set :{balance:remainBalance}})
            let orderData = req.body
            orderData.amount = productPrice
            orderData.isFreeAppUser = false
            await orderModel.create(orderData)
            res.send({msg:"Order Purchesed Successfully",status:true})
        }
        else 
        {
            res.send({msg:"user doesn't have enough balance",status:false})
        }
    }
}

module.exports.createOrder= createOrder
