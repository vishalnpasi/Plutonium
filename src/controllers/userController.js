const userModel= require("../models/userModel")

const createUser = async function(req,res){
    let newUser = req.body
    let isFreeAppUser = req.headers.isfreeappuser
    newUser.isFreeAppUser = isFreeAppUser
    let savedData = await userModel.create(newUser)
    res.send({status:true,msg:"User Saved Sucessfully"})
}
module.exports.createUser = createUser