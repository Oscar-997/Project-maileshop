const mongoose = require('mongoose')// import thư viện mongoose
const Schema = mongoose.Schema;// tạo 1 biến với phương thức Schema về để 
const slug = require('mongoose-slug-generator'); // call đến plugin tải về mongoose để có thể 
                                // thêm được slug sau local/Fabrics/slug

const mongooseDelete = require('mongoose-delete');

const Cart = new Schema({
        idUser: String,
        idFabric: String,
        nameFabric: String,
        priceFabric: String,
        count: Number,
        image: String
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