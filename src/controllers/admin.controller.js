const path = require('path');
const { getAll, getOne, create } = require('../models/product.models');

module.exports = {
    admin: async (req, res) => {

        const data = await getAll();

        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: 'Admin',
            data
    })
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: 'Crear Item',
    })
    },

    createItem: async (req, res) => {
       

        const product_schema  = {
            product_name: req.body.name,
            product_description: req.body.description,
            price: Number(req.body.price),
            stock: Number(req.body.stock),
            discount: Number(req.body.discount),
            sku: req.body.sku,
            dues: Number(req.body.dues),
            image_front: req.files[0].originalname,
            image_back: req.files[1].originalname,
            licence_id: Number(req.body.licence),
            category_id: Number(req.body.category),
        }

        await create([Object.values(product_schema)])
        res.redirect('/admin');
    },

    edit: async (req, res) => {

        const { id } = req.params;
        const [ product ] = await getOne(id);
        

        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: 'Editar Item',
            product
    })
    },

    editItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
    },

    deleteItem: (req, res) => {
        res.send('This is the BORRAR ITEM view');
    }
}