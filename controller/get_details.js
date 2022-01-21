const Post_details_model = require('../models/post_details_model')
const get_details_fun = async(req,res)=>{
const getDet = await Post_details_model.find()
res.send(getDet)
}
module.exports = {get_details_fun};