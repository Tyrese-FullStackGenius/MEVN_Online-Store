const {validationResult} = require('express-validator')
const bcrypt = require("bcryptjs");
const User = require('../models/User');
const jwt = require('jsonwebtoken')

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

                let token = jwt.sign(
                    {id: user._id, username: user.email},
                    'rysiek123',
                    {expiresIn: 129600});

                return res.status(200).json({
                    message: 'Logged in.',
                    token
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

exports.accountSettings = (req, res, next) => {
    throwValidationError(req, res);
    console.log(req.body.token);
    jwt.verify(req.body.token, 'rysiek123', (err, user) => {
        if (err) {
            return res.status(400).json({
                message: 'User not found.'
            });
        }
        User.findOne({email: user.username}, (err, model) => {
            return res.status(200).json({
                email: model.email
            })
        });
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
