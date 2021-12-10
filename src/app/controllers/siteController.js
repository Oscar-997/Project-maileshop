const Fabric = require('../../app/models/Fabric');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] home
    index(req, res, next) {
        res.render('home')
    }

    
}

module.exports = new SiteController();