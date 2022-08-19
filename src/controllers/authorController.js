const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await authorModel.create(author)
    res.send("Author have been Created")
}

module.exports.createAuthor= createAuthor
