const User = require('../../app/models/User');
const { multipleMongooseToObject } = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
const jwt = require('jsonwebtoken')

class userController {

    //[GET] /user/regester form
    regesterForm(req, res, next) {
        res.render('./user/regesterForm.hbs')
    }

    //[POST] /user/regester
    regester (req, res, next) {
        const formData = req.body
        const user = new User(formData)
        User.findOne({
            username: formData.username
        })
            .then(data => {
                if(data) {
                    res.send('User này đã tồn tại, vui lòng thay đổi thông tin khác!!!')
                }else{
                    return user.save()
                }
            })
           .then(() => res.redirect('/user/login-form'))
           .catch(next);
    }

    // [GET] /user/login form

    loginForm(req, res, next) {
        res.render('./user/loginForm.hbs')
    }

    //[POST] user/login

    login(req, res, next) {
        User.findOne({
            username: req.body.username,
            password: req.body.password
        })
            .then(data => {
                if(data) {
                    var token = jwt.sign({
                        _id: data._id
                    }, process.env.JWT_SECRET_KEY )
                    return res.json({
                        message: 'Login successful',
                        token: token
                    })
                }else{
                    res.json('dang nhap that bai')
                }
            })
            .catch(next);
    }
}

module.exports = new userController();