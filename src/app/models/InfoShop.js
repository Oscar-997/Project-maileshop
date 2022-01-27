const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 

const mongooseDelete = require('mongoose-delete');
const { type } = require('express/lib/response');


const InfoShop = new Schema({
    image: {type: String},
},{
    timestamps: true,
    collection: 'info-shop'
});

// add plugin
mongoose.plugin(slug)
InfoShop.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('infoShop', InfoShop);