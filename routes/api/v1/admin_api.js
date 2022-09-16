const express = require('express');
const router = express.Router();
const adminApi = require('../../../controllers/api/v1/admin_api');
// router to handle admin registration requests
router.post('/register', adminApi.register);
// router to handle token generation requests
router.post('/create-session', adminApi.createSession);


module.exports = router;