const {Category} = require('../models')

function getAllCategories(req, res) {
    console.log('COntroller!')
    return Category.getAll()
        .then(tags => res.json(tags))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCategories}