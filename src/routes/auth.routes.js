const express = require('express');
const router = express.Router();



router.get('/login', (req, res) => res.send('This is the LOGIN view'));
router.post('/login', (req, res) => res.send('This is the LOGIN SUBMIT view'));
router.get('/register', (req, res) => res.send('This is the REGISTER view'));
router.post('/register', (req, res) => res.send('This is the para submitear un register view'));
router.get('/logout', (req, res) => res.send('This is the LOGOUT view'));




module.exports = router;