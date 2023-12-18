const path = require('path');
const { getAll, getOne } = require('../models/product.models');

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

    createItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
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