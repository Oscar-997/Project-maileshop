const Fabric = require('../models/Fabric')
const { mongooseToObject } = require('../../util/mongoose')

class showController {
    // [GET] show

    show(req, res, next) {
        res.render('./show/show.hbs')
    }

}

module.exports = new showController();