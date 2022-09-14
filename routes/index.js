const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/about'));

router.use('/admin', require('./admin'));

module.exports = router;