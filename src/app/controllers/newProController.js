const Fabric = require('../../app/models/Fabric');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const PAGE_SIZE = 6;

class newProController {
    // [GET] newPro
    index(req, res, next) {
        var page = req.query.page
        if(page) {
            page = parseInt(page)
            if(page < 1) {
                page = 1
            }
            var skip = (page - 1) * PAGE_SIZE;
            
            Fabric.find({})
                .skip(skip)
                .limit(PAGE_SIZE)
                .then(fabric => {
                    Fabric.countDocuments({})
                        .then((total) => {
                            var totalPage = Math.ceil(total / PAGE_SIZE)
                            res.json({
                                total: total,
                                totalPage: totalPage,
                                fabric: fabric
                            })
                        })
                })
                .catch(next)

        }else{
            // get all

            Fabric.find()
                .then(fabric => res.render('./newProduct/newPro.hbs', {
                    fabric: multipleMongooseToObject(fabric)
                }))
                .catch(next);
        }
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