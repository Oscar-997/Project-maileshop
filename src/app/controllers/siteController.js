const Slider = require('../../app/models/Slider')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    index(req, res, next) {
        res.render('home')
    }

    slider(req, res, next) {
        Slider.find({})
            .then(slider => res.render('./partials/slide.hbs', {
                slider: multipleMongooseToObject(slider)
            }))
            .catch(next)
    }
}

module.exports = new SiteController();