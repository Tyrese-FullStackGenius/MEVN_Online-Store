const {validationResult} = require('express-validator')
const bcrypt = require("bcryptjs");
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

exports.update = (req, res, next) => {
    throwValidationError(req, res);

    const jwt_decoded = jwt_decode(req.body.token)

    User.findOne({email: jwt_decoded.username}, (err, model) => {
        model.cart.push(req.body.product)
        model.save()

        return res.status(200).json({
            cart: model.cart
        })
    })
}

exports.get = (req, res, next) => {
    throwValidationError(req, res);

    const jwt_decoded = jwt_decode(req.body.token)

    User.findOne({email: jwt_decoded.username}, (err, model) => {
        return res.status(200).json({
            cart: model.cart
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
