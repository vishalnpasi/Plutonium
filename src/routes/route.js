const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

//.........................................................

const BooksController = require('../controllers/myBooksController')

router.post("/createBook",BooksController.createBook)

router.get("/bookList",BooksController.bookList)

router.post("/getBooksinYear",BooksController.getBooksinYear)

router.post("/getParticularBooks",BooksController.getParticularbooks)

router.get("/getXINRBooks",BooksController.getXINRBooks)

router.get("/getRandomBooks",BooksController.getRandomBooks)

router.get("/updateBooks",BooksController.updateBooks)

const moment = require('moment')
router.get("/dateManipulation",function(req,res){
    const today=moment();
    console.log(today.format("YYYY-MM-DD"));

    let isValid=moment("2000-12-23","YYYY-MM-DD").isValid()
    console.log(isValid)
    res.send({msg:"demo"})
})

module.exports = router;