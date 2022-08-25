const productModel = require('../models/productModel')

const createProduct = async function(req,res){

    let data = await productModel.create(req.body)
    res.send({status:true,msg:"Product Created SuccessFully"})
}

module.exports.createProduct = createProduct