const express = require('express');
const Joi = require('joi');
const { Post_Function } = require('../controller/createDetails')
const postDetails = express()
//user Signup-user route.
postDetails.post('/postDetails', async (req, res) => {
    const schema = Joi.object({
        ProjectName: Joi.string()
            .min(3)
            .max(50)
            .required(),
        ClientName: Joi.string()
            .min(3).max(20)
            .required(),
        PanelName: Joi.string()
            .max(50)
            .required(),
        PageName: Joi.string().max(20)
            .required(),
        SectionName: Joi.string()
            .max(50)
            .required(),
        EventName: Joi.string()
            .max(20)
            .required(),
        ApiName: Joi.string()
            .required(),
        LogicProcess: Joi.string().max(150)
            .required(),
    })
    try {
        let valiDateUser = schema.validate(req.body)
        if (!valiDateUser.error) {
            await Post_Function(req, res)
            console.log(req.body, ".............from frontend");
            res.status(200).send()
        } else {
            res.send(valiDateUser.error.details[0].message)
        }
    }
    catch (err) {
        console.log(`err`, err)
        res.send(err)
    }
})
module.exports = postDetails;

