const User = require('../models/User')
const jwt = require('jsonwebtoken')
const validator = require('../src/validator')

exports.update = (req, res, next) => {
    validator.throwValidationError(req, res);

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
    validator.throwValidationError(req, res);

    jwt.verify(req.headers.authorization.substring(7), 'L,T?DpKQXu4%p4To6i4a', (err, user) => {
        User.findOne({email: user.username}, (err, model) => {
            return res.status(200).json({
                cart: model.cart
            })
        })
    })
}

exports.destroy = (req, res, next) => {
    validator.throwValidationError(req, res);

    jwt.verify(req.headers.authorization.substring(7), 'L,T?DpKQXu4%p4To6i4a', (err, user) => {
        User.findOne({email: user.username}, (err, model) => {
            const itemToBeRemoved = model.cart.find(item => item._id === req.query.id)
            model.cart.splice(model.cart.indexOf(itemToBeRemoved), 1)
            model.save()

            return res.status(200).json({
                cart: model.cart
            })
        })
    })
}
