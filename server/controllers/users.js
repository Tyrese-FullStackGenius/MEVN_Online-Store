const bcrypt = require("bcryptjs");
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const validator = require('../src/validator')

exports.register = (req, res, next) => {
    validator.throwValidationError(req, res);

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


exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, 'L,T?DpKQXu4%p4To6i4a', (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send();
        }

        return res.status(200).json({
            'message': 'Token is still valid'
        })
    })
}

exports.login = (req, res, next) => {
    validator.throwValidationError(req, res);

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
                    'L,T?DpKQXu4%p4To6i4a',
                    {expiresIn: 2});

                return res.status(200).json({
                    message: 'Logged in.',
                    token,
                    cart: user.cart
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
    validator.throwValidationError(req, res);

    jwt.verify(req.headers.authorization.substring(7), 'L,T?DpKQXu4%p4To6i4a', (err, user) => {
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
