
const BookModel = require('../models/myBooksModel')
//const { all } = require('../routes/route')

const createBook = async function(req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg:savedData})
}

const bookList = async function(req,res){
    let allBooks = await BookModel.find().select({bookName:1, authorName: 1 ,_id:0})
    res.send({msg:allBooks}) 
}

const getBooksinYear = async function(req,res){
    let userYear = req.body.userYear
    let allBooks = await BookModel.find({year:{$eq:userYear}})
   // console.log("hi",allBooks)
    res.send({msg:allBooks})
}

const getParticularbooks=async function(req,res){

    let obj = req.body
    //let key=Object. keys(obj)[0] 
    //let value = obj[key]
    //let specificBook = await BookModel.find({ [key]:value})
    let specificBook = await BookModel.find(obj)
    console.log("enter")
    res.send({msg:specificBook})
}

const getXINRBooks = async function(req,res){
    // let XINR =await BookModel.find({ prices["indianPrice"] : {$in:["100INR","200INR","500INR"]}})
    let XINR =await BookModel.find({"prices.indianPrice": {$in:["100INR","200INR","500INR"]}})
    res.send({msg:XINR})
}

const getRandomBooks = async function(req,res){
    let random = await BookModel.find({$or :[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:random})
}

const updateBooks = async function(req,res){

    let allBooks = await BookModel.updateMany(
        { bookName:"english"},
        {$set:{stockAvailable:true}}
    )
    // let rnadom = await BookModel.find({$or :[{stockAvailable:true},{totalPages:{$gt:500}}]})
     res.send({msg:allBooks})
}


module.exports.createBook=createBook
module.exports.bookList = bookList
module.exports.getBooksinYear = getBooksinYear
module.exports.getParticularbooks=getParticularbooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.updateBooks = updateBooks
