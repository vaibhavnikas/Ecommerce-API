const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/about'));

router.use('/api', require('./api'));

module.exports = router;