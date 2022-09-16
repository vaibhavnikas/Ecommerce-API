const express = require('express');
const router = express.Router();
// router to display project details
router.get('/', require('../controllers/about'));
// router to access api
router.use('/api', require('./api'));

module.exports = router;