const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment')
const postSchema = mongoose.Schema({
    ProjectName: {
        type: String,
        required: true
    },
    ClientName: {
        type: String,
        required: true
    },
    PanelName: {
        type: String,
        required: true
    },
    PageName: {
        type: String,
        required: true
    },
    SectionName: {
        type: String,
        required: true
    },
    EventName: {
        type: String,
        required: true
    },
    ApiName: {
        type: String,
        required: true
    },
    LogicProcess: {
        type: String,
        required: true
    },
   },
    { timestamps: true }

);
autoIncrement.initialize(mongoose.connection)
postSchema.plugin(autoIncrement.plugin,'Post_details_model')
module.exports = mongoose.model('Post_details_model', postSchema);