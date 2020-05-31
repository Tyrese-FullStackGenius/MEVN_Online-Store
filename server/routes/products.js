const express = require('express')
const router = express.Router();
const productsController = require('../controllers/products');

// Get products
router.post('/products', productsController.get)

module.exports = router;
