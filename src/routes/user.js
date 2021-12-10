const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/userController.js')

router.get('/regester-form', userController.regesterForm)
router.post('/regester', userController.regester)
router.get('/login-form', userController.loginForm)
router.post('/login', userController.login)


module.exports = router