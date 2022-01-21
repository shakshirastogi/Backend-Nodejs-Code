const Post_details_model = require('../models/post_details_model')
const Post_Function = async(req,res)=>{
const data = req.body;
const Data = await Post_details_model.findOne({ ProjectName: data.ProjectName })
if (Data != null) {
   return res.json({ msg: ' this data is alrady exist..' })
} else {
   saveItems = new Post_details_model(data)
   saveItems.save().then((res) => {
      console.log(res)
   }).catch((err) => {
      console.log(err)
   })
}

}
module.exports = {Post_Function};