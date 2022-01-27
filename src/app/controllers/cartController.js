const Cart = require('../../app/models/Cart');
const Fabric = require('./../models/Fabric')
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class cartController {
    
    //[Get] /cart
    cart(req, res, next) {
        res.render('./cart/cart.hbs')
    }

    //[Post] /add-to-cart
    addToCart(req, res, next) {
        
    }
}

module.exports = new cartController();