const {validationResult} = require('express-validator')
const bcrypt = require("bcryptjs");
const User = require('../models/user');

exports.register = (req, res, next) => {
    throwValidationError(req, res);

    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({
                message: 'User with this email already exists.'
            });
        }
        return bcrypt.hash(req.body.password, 12).then(hashedPassword => {
            let userModel = new User({
                email: req.body.email,
                password: hashedPassword
            })
            userModel.save(error => {
                if (error) {
                    return res.status(500).json({
                       message: 'Internal error.'
                    })
                }
                return res.send({
                    success: true,
                    message: 'User has been registered.'
                })
            })
        })
    })
}

exports.login = (req, res, next) => {
    throwValidationError(req, res);

    User.findOne({email: req.body.email}).then(user => {
        if (!user) {
            return res.status(400).json({
                message: 'User not found.'
            });
        }
        return bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
            if (isPasswordValid) {
                res.cookie('loggedIn', 'true')
                return res.status(200).json({
                    message: 'Logged in.'
                })
            } else {
                return res.status(400).json({
                    message: 'Invalid password.'
                });
            }
        }).catch(error => {
            return res.status(500).json({
                message: 'Internal error.'
            });
        })
    })
}

const throwValidationError = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
}
