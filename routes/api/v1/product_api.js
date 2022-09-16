const express = require('express');
const router = express.Router();
const productsController = require('../../../controllers/api/v1/product_api');
// router to handle requests to create a product
router.post('/create', productsController.create);
// router to handle requests to display all products
router.get('/', productsController.displayProducts);
// router to handle requests to delete a product
router.delete('/:id', productsController.delete);
// router to handle requests to update product quantity
router.post('/:id/update_quantity', productsController.updateProductQuantity);

module.exports = router;