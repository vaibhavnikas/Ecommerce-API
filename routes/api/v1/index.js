const express = require('express');
const router = express.Router();

router.use('/admin', require('./admin_api'));

module.exports = router;