const post_details_model = require('../models/post_details_model')
const getDetId = async(req,res)=>{
const id = req.params.id;
 const detId = await post_details_model.findById(id);
res.send(detId)
}


module.exports = {getDetId};