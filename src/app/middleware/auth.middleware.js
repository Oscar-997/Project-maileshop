const jwt = require('jsonwebtoken');

exports.isAuth =(req, res, next) => {
    try {
        var token = req.cookies.token;
        var result = jwt.verify(token, 'mk')
        if(result) {
           return next();
        }
    } catch (error) {
        return res.redirect('/user/login-form')
    }
}