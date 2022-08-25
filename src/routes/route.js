const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');
const mandatoryMiddleware = require('../middlewares/mandatoryMiddlewares')
const userController = require('../controllers/userController')
const orderController = require('../controllers/orderController')

router.post('/createProduct',productController.createProduct)

router.post('/createUser',mandatoryMiddleware.checkValidation,userController.createUser)

router.post("/createOrder",mandatoryMiddleware.checkValidation,orderController.createOrder)

module.exports = router;