const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { Router } = require('express');
const UserModel = require("../models/useModel.js");
const userController = require('../controllers/userController');

const router = express.Router();

// router.post("/createUser",userController.creatUser);
// router.post("/createUser", async function(req,res){
//     let data = req.body
//     let savedData = await UserModel.create(data)
//     res.send({msg: savedData })
// });

// router.get('/getUser',async function(req,res){
//     let allUser = await UserModel.find();
//     res.send({msg:allUser})
// });
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if (movieIndex < 0 || movieIndex >= movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    //send all the films
    res.send(films)
})

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId

    //iterate all the films
    //search for a film whose id matches with the id recevied in request
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            //if there is a match return the response from here
            return res.send(film)
        }
    }

    //if there is no match give an error response
    res.send("The film id doesn't match any movie")
})

 
router.post('/test-post', function (req, res) {

    let id = req.body.user
    let pass = req.body.password

    console.log(id,pass)
    console.log(req.body)
    res.send([2,3,4,5])
})

router.post('/test-post-4',function (req,res){
    console.log('enter')
    let arr = [12,'functionup']
    let inp = req.body.element
    arr.push(inp)
    res.send({msg:arr,status:true})
    
})

let players = [
        {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
   let boockings = [
        {
            'bookingNumber': 1,
            'sportId': "",
            'centerId': "",
            'type': 'private',
            'slot': '16286598000000',
            'bookedOn': '31/08/2021',
            'bookedFor': '01/09/2021'
        }
       
   ]

router.post('/players/:playerName/bookings/:bookingId',function(req,res){

    let playerName = req.params.playerName
    if(players.find(player => player.name == playerName)) {

        let bookingId = req.params.bookingId
        if(boockings.find( bookingDetail => bookingDetail.bookingNumber == bookingId )){
            res.send('booking is already prosseced')
        }
        else{
            boockings.push(req.body)

            res.send(boockings)
        }
    }
    else res.send("Player NOT Being found")
    
})

router.post('/players',function(req,res){

    let newPlayer = req.body
    if( !players.find(element => element.name === newPlayer.name))
    {
        players.push(newPlayer)
        res.send({data:players , status:true})
    } 
    else res.send("player Already Exist")

})

router.post("/get-query-1",function(req,res){
    
        let marks = req.query.marks

        let result = marks>40 ? 'Pass':'Fail'
        res.send({data:result , status:true})
})
let arr = [ 24,2,4,523456,23,57,43,54,890,4]

router.post('/post-query-2',function(req,res){

    let input = req.query.inp
    console.log(req.query)
    let finalArr = arr.filter(element => element >= input)
    res.send({data:finalArr,status:true})
})

let persons = [
    {
        name:"PK",
        age:10,
        votingStatus:false
    },
    {
        name:"SK",
        age:20,
        votingStatus:false
    },
    {
        name:"AA",
        age:70,
        votingStatus:false
    },
    {
        name:"SC",
        age:5,
        votingStatus:false
    },
    {
        name:"PK",
        age:40,
        votingStatus:false
    },
]
router.get('/personsVote',function(req,res){
    let age = req.query.age
    if(age)
    {
        let newPersons=persons.filter((element) => {
            if(element.age>age)
            {
                element.votingStatus = true;
                return element;
            }
        })
        res.send(newPersons)
    }
    else
    {
        res.send("PLS Enter Valid Age")
    }
})

module.exports = router;
// adding this comment for no reason