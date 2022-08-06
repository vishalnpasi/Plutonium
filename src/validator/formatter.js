
let str = "           FunctionUp          "

const toTrim = function(){
    str = str.trim();
    console.log("Removed the leading and Tranling on the String:=",str)
}

const changeToLowerCase = function(){
    str = str.toLowerCase()
    console.log("String Changed to Lower Case := ",str)    
}

const changeToUpperCase = function(){
    str = str.toUpperCase();
    console.log("String Changed to Upper Case := ", str)
}

module.exports.toTrim=toTrim
module.exports.changeToLowerCase=changeToLowerCase
module.exports.changeToUpperCase=changeToUpperCase