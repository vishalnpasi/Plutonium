var today = new Date();

const printDate = function(){
    
    console.log("current Date is: ",today)
}

const printMonth = function(){
  
    var mm = String(today.getMonth() + 1)
    console.log("current Month is:",mm)
}

const getBatchInfo = function(){

    console.log(" Plutonium , W3D5, the topic for today is Nodejs module system.")
}

module.exports.printMonth = printMonth
module.exports.printDate = printDate
module.exports.getBatchInfo = getBatchInfo