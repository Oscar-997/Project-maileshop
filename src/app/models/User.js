const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator'); 

const mongooseDelete = require('mongoose-delete');


const User = new Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
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