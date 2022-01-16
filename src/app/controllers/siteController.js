const Slider = require('../../app/models/Slider')
const Info = require('../models/Info')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    index(req, res, next) {

        Promise.all([Slider.find({}), Info.find({})])
            .then(([sliders, infos]) =>  res.render('home', {
                sliders: multipleMongooseToObject(sliders),
                infos: multipleMongooseToObject(infos),
            }))
            .catch(next);
    }
}

module.exports = new SiteController();