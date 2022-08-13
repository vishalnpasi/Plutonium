const express = require('express');
var bodyParser = require('body-parser');

 const { default: mongoose } = require('mongoose')

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let total = 0;
    for (var i in arr) {
        total += arr[i];    //total = total + arr[i]
    }
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });


app.get("/sol2",function(req , res){
    
    let arr = [33,34,35,37,38]
    let len = arr.length;
    let total = 0;
    for(var i in arr)
        total+=arr[i];
    let firstDigit = arr[0];
    let lastDigit = arr.pop();
    let consecutiveSum = (len + 1)*(firstDigit + lastDigit)/2;
    let missingNumber = consecutiveSum -total;

    res.send({data : missingNumber});
})

mongoose.connect("mongodb+srv://vishalpasi:FbiA1ChEDTbvv6eL@cluster0.3xmrakz.mongodb.net/vishalpasi",{
    useNewUrlparser:true
})
.then( () => console.log("MongoDB is Connected"))
.catch( err => console.log(err))


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

