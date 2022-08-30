const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// 1) CreateUser ....
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};
//2) LoginUser.....
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({status: false,msg: "username or the password is not corerct",});

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      organisation: "FunctionUp",
    },
    "functionup-plutonium-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
  //"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzBjZjE3MzUwNzc4Yzc2N2FlZmI1ODMiLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjYxNzk4MzI4fQ.MEATkdulQrFMSkPb7O8Y_9fIJWfYnDNUsSF2VfQJSzg"
};

//3) GetUser.....
const getUserData = async function (req, res , next) {
     
  let userId = req.params.userId;
  try{
    let userDetails = await userModel.findById(userId);
    if(!userDetails) return res.send({status:false,msg:"No such user exists"})
    res.send({ status: true, data: userDetails });
  }
  catch(err){
    return res.send({ status: false, msg: "No such user exists" });
  }
};

//4) PUT) UpdateUser...
const updateUser = async function (req, res) {

  try{
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
    if(!updatedUser) // if updateUser == null , undefined
      return res.send({ status: false, msg: "No such user exists " });
    res.send({ status: true, data: updatedUser });
  }
  catch(err){
    return res.send({ status: false, msg: "No such user exists" });
  }
};

//5) DELETE)delterUser

const deleteUser = async function(req,res){

    try{
      let userId = req.params.userId
      let deletedUser= await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
      if(!deletedUser) 
        return res.send({ status: false, msg: "No such user exists" });
      res.send({status:true,msg:deletedUser})
    }
    catch(err){
      return res.send({ status: false, msg: "No such user exists" });
    }    
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
