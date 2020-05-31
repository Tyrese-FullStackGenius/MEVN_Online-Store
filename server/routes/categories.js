const express = require('express')
const router = express.Router();
const categoriesController = require('../controllers/categories');

// Get categories
router.get('/categories', categoriesController.get)

module.exports = router;
