let axios = require("axios")

const getListSessionByDistrictId =async function(req,res){
    try{
        let district_id = req.query.district_id
        let date = req.query.date
        let options = {
            method:"get",
           url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
    }
    catch(err){
        res.status(500).send({msg:err.message})
    }
}

module.exports.getListSessionByDistrictId = getListSessionByDistrictId
