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
    //part a)
    // sol 1..
    let specificPublisher = await publisherModel.find({name:{$in:["Penguin","Harper Collins"]}}).select({_id:1})
    let allId = specificPublisher.map(obj => obj.id)        //converting Array of Object to Only Array...
    let result = await bookModel.updateMany({publisherId:{$in : allId}},{$set :{isHardCover:true}},{new:true})

    res.send({msg:result})

    // part b)
    //find all books whose authors have rating > 3.5
    //update the price of these books..
    //sol 1..
    // let specificAuthors = await authorModel.find({rating:{$gt : 3.5}}).select({_id:true})
    // specificAuthors = specificAuthors.map(obj => obj.id)
    // let specificBooks = await bookModel.updateMany({authorId:{$in : specificAuthors}},{$inc :{price:10}})
    // res.send({msg:specificBooks})

    // sol 2..
    // let allBooks = await bookModel.find().populate("authorId")
    // let specificAuthors = allBooks.filter(obj => obj.authorId.rating > 3.5)
    // specificAuthorsId = specificAuthors.map(obj => obj.id)
    // let specificBooks = await bookModel.updateMany({_id:{$in : specificAuthorsId}},{$inc :{price:10}})
    //  res.send({msg:specificBooks})

    //  res.send({msg:specificAuthorsId})
    
    // let allBooks = await bookModel.updateMany({},{price:0})
    
}
module.exports.createBook= createBook
module.exports.getAllBook = getAllBook
module.exports.updateBooks = updateBooks
