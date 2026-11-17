const customerService = require('../services/customerService');

const showRegistration = (req, res) => {
    res.render('register', { error: null });
};

const registerCustomer = async (req, res) => {
    const { name, email, password, address } = req.body;

    if (!name || !email || !password || !address) {
        return res.status(400).render('register', {
            error: 'All fields are required'
        });
    }

    try {
        const customer = await customerService.registerCustomer(
    name, email, password, address
);

req.session.regenerate((err) => {
    if (err) {
        return res.status(500).send('Session error');
    }

    req.session.customerId = customer.id;

    req.session.save((err) => {
        if (err) {
            return res.status(500).send('Session error');
        }

        res.redirect('/products');
    });
});

    } catch (error) {
        res.status(400).render('register', {
            error: error.message
        });
    }
};

module.exports = { showRegistration, registerCustomer };