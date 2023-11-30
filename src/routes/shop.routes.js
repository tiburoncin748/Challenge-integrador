const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.send('This is the SHOP view'));
router.get('/item/:id', (req, res) => res.send(`This is the ITEM ${id} view`));
router.post('/item/:id/add', (req, res) => res.send('This is the PARA AGREGAR UN ITEM view'));
router.get('/cart', (req, res) => res.send('This is the CARRiTOU view'));
router.post('/cart', (req, res) => res.send('This is the AGREGAR UN ITEM view'));

module.exports = router;