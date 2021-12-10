const Fabric = require('../../app/models/Fabric');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class newProController {
    // [GET] newPro
    index(req, res, next) {
        Fabric.find()
            .then(fabric => res.render('./newProduct/newPro.hbs', {
                fabric: multipleMongooseToObject(fabric)
            }))
            .catch(next);
    }

    show(req, res, next) {
        Fabric.findOne({ slug: req.params.slug})
            .then(fabrics => {
                res.render('./show/show.hbs', {
                    fabrics: mongooseToObject(fabrics)
                })
            })
            .catch(next);
    }
}

module.exports = new newProController();