const express = require('express');
const router = express.Router();

const newProController = require('../app/controllers/newProController')

router.get('/', newProController.index)
router.get('/:slug', newProController.show)

module.exports = router