const express = require('express')
const router = express.Router();
const {check} = require('express-validator')
const usersController = require('../controllers/users');

// Register new user
router.post('/register', [
    check('email', 'Invalid email format')
        .exists()
        .isEmail(),
    check('password', 'Password needs to be between 8 and 20 characters long.')
        .isLength({min: 8, max: 20})
], usersController.register)

// User log in
router.post('/login', [
    check('email', 'Invalid email format')
        .exists()
        .isEmail(),
    check('password', 'Password field is required.')
        .notEmpty()
], usersController.login)

module.exports = router;
