const orderService = require('../services/orderService');
const cartController = require('./cartController');

const checkout = (req, res) => {
    try {
        const cart = cartController.cart;

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
    const cart = cartController.cart;

    const orders = orderService.getCustomerOrders(
        cart.customerId
    );

    res.render('orders', { orders });
};

module.exports = { checkout, showOrders };