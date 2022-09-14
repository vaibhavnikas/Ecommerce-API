const express = require('express');
const router = express.Router();
const adminApi = require('../../../controllers/api/v1/admin_api');

router.post('/register', adminApi.register);
router.post('/create-session', adminApi.createSession);


module.exports = router;