const UserModel = require("../models/useModel.js");
const creatUser = async function (req,res){
    let data = req.body
    let savedData = await UserModel.create(data)
    res.send({msg: savedData })
}
module.exports.creatUser = creatUser
