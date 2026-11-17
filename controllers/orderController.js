const orderService = require('../services/orderService');
const cartController = require('./cartController');

const checkout = (req, res) => {
    try {
        const cart = cartController.getCart(req);

if (!cart) {
    return res.redirect('/register');
}

        const order = orderService.createOrder(
            cart.customerId,
            cart
        );

        cart.items = [];

        res.redirect('/orders');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const showOrders = (req, res) => {
    const customerId = req.session.customerId;

    if (!customerId) {
        return res.redirect('/register');
    }

    const orders = orderService.getCustomerOrders(customerId);

    res.render('orders', { orders });
};

module.exports = { checkout, showOrders };