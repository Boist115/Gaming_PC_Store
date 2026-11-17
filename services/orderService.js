class Order {
    constructor(id, customerId, products, total, date, status) {
        this.id = id;
        this.customerId = customerId;
        this.products = products;
        this.total = total;
        this.date = date;
        this.status = status;
    }
}

const orders = [];

function createOrder(customerId, cart) {
    if (cart.items.length === 0) {
        throw new Error('Cannot checkout with an empty cart');
    }

    const order = new Order(
        orders.length + 1,
        customerId,
        cart.items.map(item => ({
            product: item.product,
            quantity: item.quantity
        })),
        cart.getTotal(),
        new Date(),
        'Pending'
    );

    orders.push(order);

    return order;
}

function getCustomerOrders(customerId) {
    return orders.filter(order => order.customerId === customerId);
}

module.exports = { Order, createOrder, getCustomerOrders };