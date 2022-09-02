const axios = require('axios')

const openWhetherMap = async function (req, res) {

   
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let result = []
        for (let i = 0; i < cities.length; i++) {
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a1ec1bb139c91510f4b53f487127c6fb`
            }
            let temp = await axios(options)
            result.push({ city: cities[i], temp: temp.data.main.temp })
        }
        result = result.sort(function(a,b){return  a.temp - b.temp})
        res.status(200).send({ data: result })
    }
    catch (err) {
        res.status(500).send({ msg: err.massage })
    }

}
module.exports.openWhetherMap = openWhetherMap

