class Cart {
    constructor(customerId) {
        this.customerId = customerId;
        this.items = [];
    }

    addItem(product, quantity) {
    const existingItem = this.items.find(
        item => item.product.id === product.id
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        this.items.push({ product, quantity });
    }
}

removeItem(productId) {
    this.items = this.items.filter(
        item => item.product.id !== productId
    );
}

updateQuantity(productId, quantity) {
    const item = this.items.find(
        item => item.product.id === productId
    );

    if (item) {
        if (quantity <= 0) {
            this.removeItem(productId);
        } else {
            item.quantity = quantity;
        }
    }
}

getTotal() {
    return this.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}
}

module.exports = { Cart };