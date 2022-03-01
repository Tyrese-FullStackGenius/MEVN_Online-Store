const express = require('express')
const router = express.Router();
const {check} = require('express-validator')
const usersController = require('../controllers/users');

// Register new user
router.post('/register', [
    check('email', 'Invalid email format.')
        .exists()
        .isEmail(),
    check('password', 'Password needs to be between 8 and 20 characters long.')
        .isLength({min: 8, max: 20})
], usersController.register)

// User log in
router.post('/login', [
    check('email', 'Invalid email format.')
        .exists()
        .isEmail(),
    check('password', 'Password field is required.')
        .notEmpty()
        .isLength({min: 8, max: 20})
], usersController.login)

// Display current user's credentials
router.get('/account/settings', usersController.accountSettings)

// Verify token
router.post('/account/token/verify', usersController.verifyToken)

module.exports = router;
