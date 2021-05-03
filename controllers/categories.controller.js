const {Category} = require('../models')

function getAll(req, res) {
    const {page, count} = req.query;
    if (!page || !count) return getAllCategories(req, res)
    return Promise.all([Category.getPartial(+page, +count), Category.count()])
        .then(([tags, count]) => res.json({tags, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

function getAllCategories(req, res) {
    return Promise.all([Category.getAll(), Category.count()])
        .then(([tags, count]) => {
            res.json({tags, count})
        })
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAll}