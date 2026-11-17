const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/register', customerController.showRegistration);
router.post('/register', customerController.registerCustomer);

module.exports = router;