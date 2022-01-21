const express = require('express')
const {update} = require('../controller/update-details')
 const updateDetails = express();
updateDetails.patch('/update/:id', async (req, res) => {
 await update(req,res)
})

module.exports = updateDetails;