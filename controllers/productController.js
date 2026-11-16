const productService = require('../services/productService');

const showProducts = (req, res) => {
    const products = productService.getAllProducts();

    res.render('products', { products });
};

module.exports = { showProducts };