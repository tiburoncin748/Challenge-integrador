const { conn } = require('../config/conn');

const getAll = async () => {

    try {
        const [rows] = await conn.query('SELECT * FROM product;');
        return rows;
    } catch (error) {
        return {
            error: true,
            message: '😢 Hemos encontrado un error '+ error +'🛑'
        }
    } finally {
        conn.releaseConnection();
    }
}
const getOne = async (id) => {

    try {
        const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?;', id);
        return rows;
    } catch (error) {
        return {
            error: true,
            message: '😢 Hemos encontrado un error '+ error + '🛑'
        }
    } finally {
        conn.releaseConnection();
    }
}

const create = async (params) => {
    try {
        const [product] = await conn.query('INSERT INTO product(prduct_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', params)
    } catch (error) {
        return {
            error: true,
            message: '😢 Hemos encontrado un error '+ error + '🛑'
        }
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
    getAll,
    getOne,
    create
}