const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const mongooseDelete = require('mongoose-delete');


const Fabric = new Schema({
    name: {type: 'string', required: true},
    description: {type: 'string'},
    image: {type: 'string'},
    slug: { type: String, slug: 'name', unique: true},
    price: {type: String}
},{
    timestamps:true,
    collection: 'fabrics'
});

// add plugin
mongoose.plugin(slug)
Fabric.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('Fabric', Fabric);