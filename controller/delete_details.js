const Post_details_model = require('../models/post_details_model');
// const Data = await product.find({})
const Delete_details_fun = async (req, res) => {
   try {
      data = req.body;
      const id = req.params.id;
      const result = await Post_details_model.findByIdAndDelete(id, (err, docs) => {
         if (err) {
            console.log(err)
         }
         else {
            ("Deleted : ", docs);
         }
      })
      res.send('document has been deleted', result)
   }
   catch (err) {
      console.log(err)
   }
}
module.exports = { Delete_details_fun }