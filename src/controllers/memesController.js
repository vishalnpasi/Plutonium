const axios = require('axios')

const getMemes = async function (req, res) {
   
   
   

        // let template_id = req.query.template_id
        // let text0 = req.query.text0
        // let text1 = req.query.text1
        // let username = req.query.username
        // let password = req.query.password
        // let options = {
        //     method: "post",
        //     url: `https://api.imgflip.com/caption_image?template_id=${template_id}&${text0}=demostration&${text1}=demo&${username}=chewie12345&${password}=meme@123`
        // }
        // let result = await axios(options)
        // res.status(200).send({ data: result.data })
    
    // catch (err) {
    //     res.status(500).send({ msg: err.message })
    // }
}
module.exports.getMemes = getMemes