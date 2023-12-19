const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles');

const {
    admin,
    create,
    createItem,
    edit,
    editItem,
    deleteItem, } = require('../controllers/admin.controller'); 

router.get('/', admin);
router.get('/create', create);
router.post('/create', upload.array('images', 2), createItem);
router.get('/edit/:id', edit);
router.put('/edit/:id', editItem);
router.delete('/delete/:id', deleteItem);



module.exports = router;