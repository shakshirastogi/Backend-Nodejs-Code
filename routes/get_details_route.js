const express = require('express');
const {get_details_fun} = require('../controller/get_details');
const get_details = express()
get_details.get('/get-details', async  (req, res) => {
await get_details_fun(req,res)
})

module.exports = get_details;