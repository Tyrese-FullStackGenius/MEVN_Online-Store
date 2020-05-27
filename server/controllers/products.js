const Product = require('../models/Product')
const Category = require('../models/Category')

exports.get = (req, res, next) => {
    if (req.body.category) {
        Category.findOne({name: req.body.category}).then(category => {
            Product.find({category_id: category._id}).then(products => {
                res.status(200).json({
                    products: products,
                })
            })

        })

    } else {
        Product.find().then(products => {
            res.status(200).json({
                products: products,
            })
        })
    }
}
