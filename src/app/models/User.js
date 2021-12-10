const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 

const mongooseDelete = require('mongoose-delete');


const User = new Schema({
    username: String,
    password: String
},{
    timestamps:true,
    collection: 'user'
});

// add plugin
mongoose.plugin(slug)
User.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('user', User);