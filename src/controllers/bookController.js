const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

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
