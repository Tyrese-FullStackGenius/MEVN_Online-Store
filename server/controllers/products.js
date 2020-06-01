const Product = require('../models/Product')
const Category = require('../models/Category')

exports.get = (req, res, next) => {
    if (req.body.category) {
        return Category.findOne({name: req.body.category}).then(category => {
            Product.find({category_id: category._id}).then(products => {
                res.status(200).json({
                    products: products,
                })
            })

        })
    }

    if (req.body.id) {
        return Product.findOne({_id: req.body.id}).then(product => {
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
