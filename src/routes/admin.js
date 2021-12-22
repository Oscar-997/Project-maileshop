const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/adminController')

router.get('/', adminController.admin)
router.get('/sliders', adminController.adminSliders)
router.get('/:id/editProduct', adminController.edit)
router.put('/:id', adminController.update)
router.delete('/:id', adminController.delete)
router.get('/listProducts', adminController.listProducts)
router.get('/creat', adminController.creatProduct)
router.post('/store', adminController.store)
router.get('/trashNewPro', adminController.trashNewPro)
router.patch('/:id/restore', adminController.restore)
router.delete('/:id/forceDelete', adminController.forceDelete)
router.post('/handle-form-actions', adminController.handleFormActions)
router.post('/handle-restore-and-forceDelete', adminController.handleRestoreAndForceDelete)
router.get('/userList', adminController.userList)
router.get('/:id/editUser', adminController.editUser)
router.put('/:id/updateUser', adminController.updateUser)
router.get('/creat/slider', adminController.creatSlider)
router.post('/store/slider', adminController.storeSlider)

module.exports = router