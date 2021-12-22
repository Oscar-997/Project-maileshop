const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 

const mongooseDelete = require('mongoose-delete');


const Slider = new Schema({
    image: {type: 'string'},
    description: {type: 'string'}
},{
    timestamps:true,
    collection: 'sliders'
});

// add plugin
mongoose.plugin(slug)
Slider.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('sliders', Slider);