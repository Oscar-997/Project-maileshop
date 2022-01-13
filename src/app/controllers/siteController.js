const Slider = require('../../app/models/Slider')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    index(req, res, next) {
        Slider.find({})
            .then(sliders => res.render('home', {
                sliders: multipleMongooseToObject(sliders)
            }))
            .catch(next)
    }
}

module.exports = new SiteController();