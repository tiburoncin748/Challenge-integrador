const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/admin.ejs'), {
            title: 'Admin',
    });
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
            title: 'Crear Item',
    })
    },

    createItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/create.ejs'))
    },

    edit: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'), {
            title: 'Editar Item',
    })
    },

    editItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/admin/edit.ejs'))
    },

    deleteItem: (req, res) => {
        res.send('This is the BORRAR ITEM view');
    }
}