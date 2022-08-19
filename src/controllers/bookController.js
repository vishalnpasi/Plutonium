const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const createBook= async function (req, res) {
    let authorId = req.body.authorId
    let publisherId = req.body.publisherId
    if(!authorId && !publisherId){
        return res.send("PLS Enter AuthorId and PubisherId")
    }
    if(!authorId){
        return res.send("PLS Enter authorId")
    }
    if(!await authorModel.findById(authorId)){
        res.send("Author is not Present")
    }
    if(!publisherId){
        return res.send("PLS Enter publisherId")
    }
    if(!await publisherModel.findById(publisherId)){
        return res.send("Publisher is not Present")
    }
    let book = req.body
    await bookModel.create(book)
    res.send("Record Saved Successfully")
}

const getAllBook = async function(req,res){
    let data = await bookModel.find().populate("authorId").populate("publisherId")
    res.send({msg:data})
}

const updateBooks = async function(req,res){
   // let AllBooks = await bookModel.find({ "publisherId.name": "Penguin"}).populate("publisherId")
    // let AllBooks = await bookModel.updateMany({publisherId :{name :{$in :["Penguin","HarperCollins"]}},{$set :{iHardCover:true}},{new:true}).populate("publisherId")
    let AllBooks = await bookModel.find().populate("publisherId")
    res.send({msg:AllBooks})
}
module.exports.createBook= createBook
module.exports.getAllBook = getAllBook
module.exports.updateBooks = updateBooks
