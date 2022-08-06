const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

//....logger file importing...
const log = require('../logger/logger')

//....util File importing....

const util = require('../util/helper')

//....validator file importing.......

const validator = require('../validator/formatter')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')

    // Problem  1 solved....

    log.welcome()       //..Welcome Function is Called.....

    // Problem  2 solved.....

    util.printDate()    //....printDate Method.......

    util.printMonth()   //....printMonth Method..............

    util.getBatchInfo() //...getBatchInfo Method.........

    // Problem  3 Solved........

    validator.toTrim()

     validator.changeToLowerCase()

     validator.changeToUpperCase()
    
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason