const express = require('express');
const router = express.Router();

const userController= require("../controllers/userController")
const authenctionMid = require("../middleware/auth")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",authenctionMid.tokenVerify, userController.getUserData)

router.put("/users/:userId",authenctionMid.tokenVerify, userController.updateUser)

router.delete("/users/:userId",authenctionMid.tokenVerify, userController.deleteUser)

module.exports = router;