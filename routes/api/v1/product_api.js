const express = require('express');
const router = express.Router();
const productsController = require('../../../controllers/api/v1/product_api');

router.post('/create', productsController.create);
router.get('/', productsController.displayProducts);

module.exports = router;