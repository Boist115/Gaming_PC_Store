const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// EJS template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Homepage routes
const homeRoutes = require('./routes/homeRoutes');
app.use('/', homeRoutes);

// Product routes
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Cart routes
const cartRoutes = require('./routes/cartRoutes');
app.use('/cart', cartRoutes);

const customerRoutes = require('./routes/customerRoutes');
app.use('/', customerRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});