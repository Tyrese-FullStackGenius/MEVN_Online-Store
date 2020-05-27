const express = require('express')
const router = express.Router();
const productsController = require('../controllers/products');

// Get products
router.get('/products', productsController.get)

module.exports = router;
