const express = require('express');
const passport = require('passport');
const router = express.Router();
// router to handle all requests coming to /api/admin
router.use('/admin', require('./admin_api'));

// router to handle all requests coming to /api/products
// used passport.authenticate() as a middleware to authenticate incoming requests using passport-jwt-strategy
router.use('/products', passport.authenticate('jwt', {session:false}), require('./product_api'));

module.exports = router;