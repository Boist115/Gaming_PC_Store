class Customer {
    constructor(id, name, email, passwordHash, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.address = address;
    }
}

const bcrypt = require('bcrypt');

const customers = [];

async function registerCustomer(name, email, password, address) {
    const existingCustomer = customers.find(
        customer => customer.email === email
    );

    if (existingCustomer) {
        throw new Error('Email already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const customer = new Customer(
        customers.length + 1,
        name,
        email,
        passwordHash,
        address
    );

    customers.push(customer);
    return customer;
}

module.exports = { Customer, registerCustomer };