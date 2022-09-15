const express = require('express');
const passport = require('passport');
const router = express.Router();

router.use('/admin', require('./admin_api'));
router.use('/products', passport.authenticate('jwt', {session:false}), require('./product_api'));

module.exports = router;