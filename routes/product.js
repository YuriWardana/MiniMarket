const express = require('express')
const router = express.Router()
const productController = require ('../controllers/productController')

router.get('/',productController.show)
// router.get('/add',productController.formAdd)
router.post('/add',productController.postAdd)
// router.get('/category/:category_id',productController.showCategoryId)
// router.get('/:product_id/discontinued',productController.Product_discontinued)
// router.get('/discontinued',discontinued)
// router.get('/discontinued/:product_id/remove',remove)


module.exports = router