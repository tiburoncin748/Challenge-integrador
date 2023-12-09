const path = require('path');

module.exports = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: 'Shop',
        });
    },
    item: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: 'Item',
    });
    },
    addItem: (req, res) => {
        res.send('This is the PARA AGREGAR UN ITEM view')
    },
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: 'Carrito',
        });
    },
    addToCart: (req, res) => res.send('Esta es la ruta para agregar un item al carro'),


}