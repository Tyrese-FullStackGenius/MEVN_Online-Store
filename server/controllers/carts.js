const {validationResult} = require('express-validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.update = (req, res, next) => {
    throwValidationError(req, res);

    jwt.verify(req.headers.authorization.substring(7), 'L,T?DpKQXu4%p4To6i4a', (err, user) => {
        User.findOne({email: user.username}, (err, model) => {
            model.cart.push(req.body.product)
            model.save()

            return res.status(200).json({
                cart: model.cart
            })
        })
    })

}

exports.get = (req, res, next) => {
    throwValidationError(req, res);

    jwt.verify(req.headers.authorization.substring(7), 'L,T?DpKQXu4%p4To6i4a', (err, user) => {
        User.findOne({email: user.username}, (err, model) => {
            return res.status(200).json({
                cart: model.cart
            })
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
