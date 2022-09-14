const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/about'));

module.exports = router;