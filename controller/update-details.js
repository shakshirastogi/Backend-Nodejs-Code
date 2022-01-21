const Post_details_model = require('../models/post_details_model')
const update = async (req, res) => {
    // const Data = await product.find({})
    const data = req.body;
    console.log(data)
    const id = req.params.id
    const options = { new: true }
    const result = await Post_details_model.findByIdAndUpdate(id, data, options)
    res.send(result)

}
module.exports = { update }