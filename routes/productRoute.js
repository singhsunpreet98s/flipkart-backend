const express = require('express');
const router = express.Router();
const { adminAuthentication } = require('./middlewares/authentications')
const { addProduct } = require('./functions/productFuns')
const { getProducts } = require('./functions/productFuns')
const { adminProd } = require('./functions/productFuns')
router.post('/addprod', adminAuthentication, addProduct)
router.get('/', getProducts)
router.get('/adminProd', adminAuthentication, adminProd)
module.exports = router
