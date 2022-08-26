
const checkValidation  = function(req,res,next){
    
    if(req.headers.isfreeappuser ==='true'){
        req.headers.isfreeappuser = true
        next()
    }
    else if( req.headers.isfreeappuser === 'false'){
        req.headers.isfreeappuser = false
        next()
    }
    else res.send({msg:"request is missing a mandatory header"})
}

module.exports.checkValidation = checkValidation