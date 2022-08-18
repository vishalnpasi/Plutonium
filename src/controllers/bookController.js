const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
//const authorModel = require("../models/authorModel")

const createBook = async function(req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg:savedData})
}

const createAuthor = async function(req,res){
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg:savedData})
}

const listBooks= async function(req,res){
    let author = await AuthorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let id = author.author_id
    let books = await BookModel.find({author_id:{$eq : id}})
    res.send({msg:books})
}

const findAuthor = async function(req,res){
    let book = await BookModel.findOneAndUpdate({name:"Two states"},{$set :{price:100}},{new:true})
    let updatedprice = book.price
    let author = await AuthorModel.findOne({author_id:book.author_id})
    let author_name = author.author_name
    res.send({author:author_name,price:updatedprice})
}

const findBook = async function(req,res){
    let bookCost= await BookModel.find( { price : { $gte: 50,$lte: 100} } ).select({ author_id :1,_id:0})

    let authors=await AuthorModel.find()
    let result = authors.filter((author)=>{
        let author_id = author.author_id
        let flag = bookCost.find((book)=>book.author_id==author_id)
        if(flag)return true
    })
    let author_names=result.map(obj => obj.author_name)
    res.send({authors:author_names})
}
module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.listBooks = listBooks
module.exports.findAuthor = findAuthor
module.exports.findBook = findBook

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks