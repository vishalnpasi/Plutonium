const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const middleware = require('../middlewares/mandatoryMiddlewares')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')

router.post('/createProduct',productController.createProduct)

router.post('/createUser',middleware.checkValidation,userController.createUser)

router.post("/createOrder",middleware.checkValidation,orderController.createOrder)

module.exports = router;