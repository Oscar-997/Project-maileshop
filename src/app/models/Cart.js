const mongoose = require('mongoose')// import thư viện mongoose
const Schema = mongoose.Schema;// tạo 1 biến với phương thức Schema về để 
const slug = require('mongoose-slug-generator'); // call đến plugin tải về mongoose để có thể 
                                // thêm được slug sau local/Fabrics/slug

const mongooseDelete = require('mongoose-delete');

const Cart = new Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    totalPrice: {type: Number, default: 0},
    items: [{
        item: {type: mongoose.Schema.Types.ObjectID, ref: 'Fabric'},
        qty: {type: Number, default: 1},
        price: {type: Number, default: 0}
    }],
},
    { 
        timestamps: true,
        collation: 'carts'
    }
)

mongoose.plugin(slug)
Cart.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
})

module.exports = mongoose.model('Cart', Cart);