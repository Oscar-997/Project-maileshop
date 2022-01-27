const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/cartController')

router.get('/', cartController.cart)
router.post('/:id/add-to-cart', cartController.addToCart)

module.exports = router