const path = require('path');

module.exports = {
    admin: (req, res) => {
        res.render(path.resolve(__dirname, '../views/pages/admin/admin.ejs'));
    },

    create: (req, res) => {
        res.render(path.resolve(__dirname, '../views/pages/admin/create.ejs'))
    },

    createItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/pages/admin/create.ejs'))
    },

    edit: (req, res) => {
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'))
    },

    editItem: (req, res) => {
        res.render(path.resolve(__dirname, '../views/pages/admin/edit.ejs'))
    },

    deleteItem: (req, res) => {
        res.send('This is the BORRAR ITEM view');
    }
}