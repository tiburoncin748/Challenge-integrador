const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => res.send('This is the JOM view'));
router.get('/contact', (req, res) => res.send('This is the CONTACT view'));
router.get('/about', (req, res) => res.send('This is the ABAUT view'));
router.get('/faqs', (req, res) => res.send('This is the FACS view'));



module.exports = router;