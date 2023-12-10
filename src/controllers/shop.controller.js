const path = require('path');

const data = [
    {
    product_id: 1,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pikachu",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001002",
    img_front: "/img/pokemon/pikachu-1.webp",
    img_back: "/img/pokemon/pikachu-box.webp"
    },
    {
    product_id: 3,
    licence_name: "Harry Potter",
    category_name: "Figuras coleccionables",
    product_name: "Luna Lovegood",
    product_description: "Figura coleccionable Harry Potter",
    product_price: 1799.99,
    dues: 10,
    product_sku: "HP001001",
    img_front: "/img/harry-potter/luna-1.webp",
    img_back: "/img/harry-potter/luna-box.webp"
    },
    {
    product_id: 4,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 5,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 6,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 7,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 8,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    },
    {
    product_id: 9,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "Pidgeotto",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp"
    }
];

module.exports = {
    shop: (req, res) => {
        
        res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
            title: 'Shop',
            data
        });
    },
    item: (req, res) => {
        const itemId = req.params.id;
       
        const item = data.find(item => item.product_id == itemId);
        
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: 'Item',
            item,
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