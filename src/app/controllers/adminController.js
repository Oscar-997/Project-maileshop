const Fabric = require('../../app/models/Fabric');
const User = require('../../app/models/User');
const Slider = require('../models/Slider')
const Info = require('../models/Info')
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class adminController {
    // [GET] home
    admin(req, res, next) {
        res.render('./admin/admin.hbs')
    }
    // [GET] admin/sliders
    adminSliders(req, res, next) {
        Slider.find({})
            .then(sliders => res.render('./admin/sliders.hbs', {
                sliders: multipleMongooseToObject(sliders)
            }))
            .catch(next)
    }

    // [GET] admin/listProducts and [count delete] đếm các file đã bị xóa mềm vào thùng rác
    listProducts(req, res, next) {
        Promise.all([Fabric.find({}), Fabric.countDocumentsDeleted()])
            .then(([fabrics, deleteCount]) => res.render('./admin/listProducts.hbs', {
                fabrics: multipleMongooseToObject(fabrics),
                deleteCount,
            }))
            .catch(next);
    }

    // [GET] admin/creat
    creatProduct(req, res, next) {
        res.render('./admin/creatProduct.hbs')
    }

    //[POST] admin/store
    store(req, res, next) {
        const formData = req.body
        const fabric = new Fabric(formData)
        fabric.save()
            .then(() => {res.redirect('/admin/listProducts')})
            .catch(next)
    }


    // [GET] admin/:id/edit

    edit(req, res, next) {
        Fabric.findById(req.params.id)
            .then(fabric => res.render('./admin/editProduct', {
                fabric: mongooseToObject(fabric)
            }))
            .catch(next);
    }

    //[PUT] admin/:id

    update(req, res, next) {
        Fabric.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/listProducts'))
            .catch(next);
    }

    //[DELETE] admin/:id
    delete(req, res, next) {
        Fabric.delete({_id: req.params.id})
            .then(() => res.redirect('/admin/listProducts'))
            .catch(next);
    }

    //


    //[GET] admin/trashNewPro tìm và hiện ra giao diện thùng rác các file đã bị xóa mềm

    trashNewPro(req, res, next) {
        Fabric.findDeleted()
            .then(fabrics => res.render('./admin/trashNewProduct.hbs', {
                fabrics: multipleMongooseToObject(fabrics)
            }))
            .catch(next);
    }

    //[POST] admin/restore khôi phục các file đã bị xóa 
    
    restore(req, res, next) {
        Fabric.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] admin/:id/forceDelete

    forceDelete(req, res, next) {
        Fabric.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] admin/handle-form-actions

    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Fabric.delete({_id: {$in: req.body.fabricIds }})
                    .then(() => res.redirect('back'))
                    .catch(next);
            break;
            default:
                res.json({message: 'action not found'});
        }
    }

    //[POST] admin/handle Restore And Force Delete

    handleRestoreAndForceDelete(req, res, next) {
        switch(req.body.action) {

            case 'restore':{
                Fabric.restore({_id: {$in: req.body.fabricIds }})
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            }

            case 'forceDelete':{
                Fabric.deleteMany({_id: {$in: req.body.fabricIds }}) // xóa 1 giá trị dựa vào giá trị tìm là ID truyền vào
                    .then(() => res.redirect('back'))// thành công render lại giao diện list khóa học
                    .catch(next)
                break;
            }

            default: {
                res.json({message: 'action not found'}); 
            }
        }
    }

    // [GET] /admin/user list

    userList(req, res, next) {
        User.find({})
            .then(users => res.render('./admin/userList.hbs', {
                users: multipleMongooseToObject(users)
            }))
            .catch(next);

    }

    // [GET] //admin/id/editUser

    editUser(req, res, next) {
        User.findById(req.params.id)
            .then(data => res.render('./admin/editUser.hbs', {
                data: mongooseToObject(data)
            }))
            .catch(next);
    }

    //[PUT] admin/:id/updataUser 
    updateUser(req, res, next) {
        User.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/userList'))
            .catch(next);
    }

    //[GET] admin/creat/slider
    creatSlider(req, res, next) {
        res.render('./admin/creatSlider')
    }

    //[POST] admin/store/slider
    storeSlider(req, res, next) {
        const formData = req.body
        const slider = new Slider(formData)
        slider.save()
            .then(() => {res.redirect('/admin/sliders')})
            .catch(next)
    }


    //[GET] admin/info
    info(req, res, next) {
        Info.find({})
            .then(info => res.render('./admin/info.hbs', {
                info: multipleMongooseToObject(info)
            }))
            .catch(next);
    }

    //[GET] admin/creat/info
    creatInfo(req, res, next) {
        res.render('./admin/creatInfo.hbs')
    }

    //[POST] admin/store/info
    storeInfo(req, res, next) {
        const formData = req.body
        const info = new Info(formData)
        info.save()
        .then(() => {res.redirect('/admin/info')})
        .catch(next)
    }

    

}

module.exports = new adminController();