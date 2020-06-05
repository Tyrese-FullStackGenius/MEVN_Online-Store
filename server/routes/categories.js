const express = require('express')
const router = express.Router();
const categoriesController = require('../controllers/categories');

// Get categories
router.post('/categories', categoriesController.get)

module.exports = router;
