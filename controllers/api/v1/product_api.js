// moved all functions to product_controllers folder to make this file scalable

module.exports.create = require('./product_controllers/create');

module.exports.displayProducts = require('./product_controllers/displayProducts');

module.exports.delete = require('./product_controllers/delete');

module.exports.updateProductQuantity = require('./product_controllers/updateProductQuantity');