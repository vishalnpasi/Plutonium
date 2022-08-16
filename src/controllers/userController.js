const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    // let allUsers= await UserModel.find({bookName:"nglish"},{bookAuthor:"xyz"})           // AND condition....
    // let allUsers= await UserModel.find({$or:[{bookName:"nglish"},{bookAuthor:"xyz"}]})   // OR condition......
    // let allUsers= await UserModel.find({$or:[{bookName:"nglish"},{bookAuthor:"xyz"}]}).count()       //  count no. of document
    // let allUsers= await UserModel.find({$or:[{bookName:"nglish"},{bookAuthor:"xyz"}]}).select({bookName:1})  //select keys that we want
    //let allUsers= await UserModel.find().sort({sales:-1})//decending order sorting //sorting
    //let allUsers= await UserModel.find().limit(3)           //Limit gets the no. of document..
    //let allUsers= await UserModel.find().sort({sales:-1}).limit(3)    //decending order last 3 document..
    
    res.send({msg: allUsers})
}
module.exports.createBook = createBook;
module.exports.getBook = getBook;

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData