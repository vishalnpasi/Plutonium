const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { Router } = require('express');

const router = express.Router();

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

router.get('/test-me2', function (req, res) {
    res.send('My API awesome properly')
})

router.get('/test-api', function (req, res) {
    res.send('hi functionup')
})

router.get('/test-api-2', function (req, res) {
    res.send('hi Functionup , this is another cool API')
})


router.get('/test-api-3', function (req, res) {
    res.send('hi Functionup , this is another cool API , and now i am bored of creating api')
})


router.get('/test-api-4', function (req, res) {
    res.send('hi Functionup , this is another cool API , and now i am bored of creating api , PLs Stop creating MORE Apis')
})

router.get('/test-api-5', function (req, res) {
    res.send('hi Functionup , this is another cool API , and now i am bored of creating api , PLs Stop creating MORE Apis')
})


router.get('/test-api-6', function (req, res) {
    res.send({a: 6 , b: 45})
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

router.post('/players',function(req,res){

    let newPlayer = req.body
    if( !players.find(element => element.name === newPlayer.name))
    {
        players.push(newPlayer)
        res.send({data:players , status:true})
    } 
    else res.send("player Already Exist")

})

module.exports = router;
// adding this comment for no reason