const express = require('express');
const { UserLogin, UserRegister } = require('../handlers/user');
const router = express.Router();

router.get('/user/login', UserLogin);
router.get('/user/register', UserRegister);

module.exports = router;