const path = require('path');

module.exports = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'));
        /*res.render(path.resolve(__dirname, '../views/shop/item.ejs'));*/
    }
}