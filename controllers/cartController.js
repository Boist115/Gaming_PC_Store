const { Cart } = require('../services/cartService');
const productService = require('../services/productService');

const carts = new Map();

function getCart(req) {
    const customerId = req.session.customerId;

    if (!customerId) {
        return null;
    }

    if (!carts.has(customerId)) {
        carts.set(customerId, new Cart(customerId));
    }

    return carts.get(customerId);
}

const showCart = (req, res) => {
    const cart = getCart(req);

    if (!cart) {
        return res.redirect('/register');
    }

    res.render('cart', {
        cart: cart,
        total: cart.getTotal()
    });
};
const addToCart = (req, res) => {
        const cart = getCart(req);

    if (!cart) {
        return res.redirect('/register');
    }
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
        const cart = getCart(req);

    if (!cart) {
        return res.redirect('/register');
    }
    const productId = Number(req.body.productId);

    cart.removeItem(productId);
    res.redirect('/cart');
};
const updateCart = (req, res) => {
        const cart = getCart(req);

    if (!cart) {
        return res.redirect('/register');
    }
    const productId = Number(req.body.productId);
    const quantity = Number(req.body.quantity);

    if (!Number.isInteger(quantity) || quantity < 0) {
        return res.status(400).send('Invalid quantity');
    }

    cart.updateQuantity(productId, quantity);
    res.redirect('/cart');
};

module.exports = {
    getCart,
    showCart,
    addToCart,
    removeFromCart,
    updateCart
};