const express = require('express');
const router = express.Router();

const cartController = require('../app/controllers/cartController')

router.get('/', cartController.cart)
router.post('/add', cartController.addToCart)

module.exports = router