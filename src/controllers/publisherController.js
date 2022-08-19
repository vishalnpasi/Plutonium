const publisherModel = require('../models/publisherModel')

const createPublisher = async function(req,res){
    let data = req.body
    let savedData = await publisherModel.create(data)
    res.send("publisher have been Created")
}

module.exports.createPublisher = createPublisher