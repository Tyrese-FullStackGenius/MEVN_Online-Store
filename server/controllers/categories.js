const Category = require('../models/Category')

exports.get = (req, res, next) => {
    Category.find().then(categories => {
        res.status(200).json({
            categories: categories,
        })
    })
}
