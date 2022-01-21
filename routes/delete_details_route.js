const express = require('express')
const {Delete_details_fun} = require('../controller/delete_details')
 const deleteDetails = express();
deleteDetails.delete('/delete/:id', async (req, res) => {
await Delete_details_fun(req,res)
})
module.exports = deleteDetails;