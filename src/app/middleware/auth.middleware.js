const jwt = require('jsonwebtoken')

exports.checkLogin =(req, res, next) => {
    try {
        var token = req.cookies.token;
        var result = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(result) {
           return next();
        }
    } catch (error) {
        return res.redirect('/user/login-form')
    }
}