const { Cart } = require('../services/cartService');
const productService = require('../services/productService');

const cart = new Cart(1);

const showCart = (req, res) => {
    res.render('cart', {
        cart: cart,
        total: cart.getTotal()
    });
};
const addToCart = (req, res) => {
    const productId = Number(req.body.productId);
    const product = productService.getAllProducts().find(
        p => p.id === productId
    );

    if (!product) {
        return res.status(404).send('Product not found');
    }

    cart.addItem(product, 1);
    res.redirect('/cart');
};
const removeFromCart = (req, res) => {
    const productId = Number(req.body.productId);

    cart.removeItem(productId);
    res.redirect('/cart');
};
const updateCart = (req, res) => {
    const productId = Number(req.body.productId);
    const quantity = Number(req.body.quantity);

    if (!Number.isInteger(quantity) || quantity < 0) {
        return res.status(400).send('Invalid quantity');
    }

    cart.updateQuantity(productId, quantity);
    res.redirect('/cart');
};

module.exports = { showCart, addToCart, removeFromCart, updateCart };