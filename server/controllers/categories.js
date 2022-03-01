const Category = require('../models/Category')
const validator = require('../src/validator')

exports.get = (req, res, next) => {
    validator.throwValidationError(req, res);

    Category.find().then(categories => {
        res.status(200).json({
            categories: categories,
        })
    })
}
