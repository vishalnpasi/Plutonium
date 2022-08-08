const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

const underScore = require('underscore')

//....logger file importing...
const log = require('../logger/logger')

//....util File importing....

const util = require('../util/helper')

//....validator file importing.......

const validator = require('../validator/formatter')

let Lodash = require('lodash');     //importing lodash package.........

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

    let weekend = ['Saturday','Sunday']
    
    let result = underScore.first(weekend , 2)
    
    console.log('UnderScore example result is:',result)

    let monthsArray=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

    //splited on Array into 4 equality...

    let subArray =Lodash.chunk(monthsArray,4)

    console.log(subArray)
    
    //select 9 last element on array.......

    let oddNum = [1,3,5,7,9,11,13,15,17,19]

    console.log(Lodash.tail(oddNum))

    //marege duplicate ....
    console.log(Lodash.union([1,2,3,4,5],[3,4,5],[6,7,7],[8,9,10]))

    //make pairs....

    console.log(Lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/cohort-members',function(req,res){
    let students = ['sabiha','Neha','Akash']
    res.send(students)
})

router.get('/students',function(req,res){
    let details = 'Sabiha'
    res.send(details)
    
})

router.get('/student-details/:name/:age',function(req,res){
    console.log('this is the request '+JSON.stringify(req.params))
    let reqParams = req.params
    let studentName = reqParams.name
    let studentAge = reqParams.age
     console.log('Name of the Student is ', studentName)
     console.log("Age of the Student is  ",studentAge)
     res.send(studentName+" "+studentAge)
    // let details = ["Neha Sharma",'Sabiha Khan']
    // res.send(details)
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason