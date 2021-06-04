const express = require('express');
const router = express.Router();
const { signup } = require('./functions/userFuns');
const { login } = require('./functions/userFuns');
const { adminLogin } = require('./functions/userFuns')
router.post('/signup', signup)
router.post('/login', login)
router.post('/adminLogin', adminLogin)
module.exports = router;