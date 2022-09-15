const express = require('express');
const router = express.Router();
const productsController = require('../../../controllers/api/v1/product_api');

router.post('/create', productsController.create);
router.get('/', productsController.displayProducts);
router.delete('/:id', productsController.delete);
router.post('/:id/update_quantity', productsController.updateProductQuantity);

module.exports = router;