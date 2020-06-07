const express = require('express')
const router = express.Router();
const {check} = require('express-validator')
const cartsController = require('../controllers/carts');

// Get cart
router.get('/cart', cartsController.get)

// Update cart
router.post('/cart/add', [
    check('token').exists()
], cartsController.update)

module.exports = router;
