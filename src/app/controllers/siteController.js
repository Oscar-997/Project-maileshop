const Slider = require('../../app/models/Slider')
const Info = require('../models/Info')
const InfoShop = require('../models/InfoShop')
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    index(req, res, next) {

        Promise.all([Slider.find({}), Info.find({}), InfoShop.findOne({})])
            .then(([sliders, infos, infoShops]) =>  res.render('home', {
                sliders: multipleMongooseToObject(sliders),
                infos: multipleMongooseToObject(infos),
                infoShops: mongooseToObject(infoShops)
            }))
            .catch(next);
    }
}

module.exports = new SiteController();