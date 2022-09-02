const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const whetherController = require('../controllers/whetherController')
const memesController = require('../controllers/memesController')
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getListSessionByDistrictId",CowinController.getListSessionByDistrictId)
// get sorted cities...

router.get("/getSortedCitiesTemp",whetherController.openWhetherMap)

router.post("/getMemes",memesController.getMemes)

module.exports = router;