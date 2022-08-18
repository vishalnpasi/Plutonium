const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")

//..Assignment...

router.post("/createBook", BookController.createBook)


router.post("/createAuthor", BookController.createAuthor  )

router.get("/listBooks", BookController.listBooks  )

router.get("/findAuthor", BookController.findAuthor  )

router.get("/findBook", BookController.findBook  )

module.exports = router;
