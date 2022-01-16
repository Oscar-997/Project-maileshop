const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 

const mongooseDelete = require('mongoose-delete');
const { type } = require('express/lib/response');


const Info = new Schema({
    image: {type: String},
    heading: {type: String},
    description: {type: String},
},{
    timestamps: true,
    collection: 'info'
});

// add plugin
mongoose.plugin(slug)
Info.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('info', Info);