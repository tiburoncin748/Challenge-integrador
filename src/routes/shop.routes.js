const express = require('express');
const router = express.Router();

const controller = require('../controllers/shop.controller');

router.get('/', controller.shop);
router.get('/item/:id', (req, res) => res.send(`This is the ITEM ${id} view`));
router.post('/item/:id/add', (req, res) => res.send('This is the PARA AGREGAR UN ITEM view'));
router.get('/cart', (req, res) => res.send('This is the CARRiTOU view'));
router.post('/cart', (req, res) => res.send('This is the AGREGAR UN ITEM view'));

module.exports = router;