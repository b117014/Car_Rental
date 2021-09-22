const express = require('express');
const { UserLogin, UserRegister, getUser } = require('../handlers/user');
const router = express.Router();

router.post('/user/login', UserLogin);
router.post('/user/register', UserRegister);
router.get('/user', getUser);

module.exports = router;