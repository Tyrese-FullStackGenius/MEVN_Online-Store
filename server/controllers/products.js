const Product = require('../models/Product')
const Category = require('../models/Category')
const validator = require('../src/validator')

exports.get = (req, res, next) => {
    validator.throwValidationError(req, res)

    if (req.query.category) {
        return Category.findOne({name: req.query.category}).then(category => {
            Product.find({category_id: category._id}).then(products => {
                res.status(200).json({
                    products: products,
                })
            })

        })
    }

    if (req.query.id) {
        return Product.findOne({_id: req.query.id}).then(product => {
            res.status(200).json({
                product: product,
            })
        })
    }

    return Product.find().then(products => {
        res.status(200).json({
            products: products,
        })
    })
}
