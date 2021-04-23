const {Category} = require('../models')

function getAllCategories(req, res) {
    const {page = 1, count} = req.query;
    return Category.getAll(+page, +count)
        .then(tags => res.json(tags))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCategories}