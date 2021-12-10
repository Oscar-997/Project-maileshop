const mongoose = require('mongoose')// import thư viện mongoose
const Schema = mongoose.Schema;// tạo 1 biến với phương thức Schema về để 
const slug = require('mongoose-slug-generator'); // call đến plugin tải về mongoose để có thể 
                                // thêm được slug sau local/Fabrics/slug

const mongooseDelete = require('mongoose-delete');

const Cart = new Schema({
    
    products: [
    {
        productId: String,
        quantity: Number,
        name: String,
        price: Number
    }
    ],
    active: {
        type: Boolean,
        default: true
    },
    modifiedOn: {
        type: Date,
        default: Date.now
    }
},
    { timestamps: true }
)

mongoose.plugin(slug)
Cart.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('Cart', Cart);