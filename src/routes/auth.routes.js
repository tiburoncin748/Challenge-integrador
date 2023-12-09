const express = require('express');
const router = express.Router();

const {
    login,
    doLogin,
    register,
    doSignUp,
    logout,}  = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/login', doLogin);
router.get('/register', register);
router.post('/register', doSignUp);
router.get('/logout', logout);




module.exports = router;