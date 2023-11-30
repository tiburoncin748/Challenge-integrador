const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.send('This is the ADMIN view'));
router.get('/create', (req, res) => res.send('This is the ADMIN CREATE view'));
router.post('/create', (req, res) => res.send('This is the ADMIN CREATE TO SUBIR ITEM view'));
router.put('/edit/:id', (req, res) => res.send('This is the para submitear un edit view'));
router.delete('/delete/:id', (req, res) => res.send('This is the BORRAR ITEM view'));



module.exports = router;