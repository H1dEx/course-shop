const {Source} = require('../models')
const getAll = (req, res) => {
    return Source.findAndCountAll({attributes: ['name', 'description', 'imagesource']})
        .then(sources => {
            if (!sources)
                throw new Error("Not found");
            return sources
        })
        .then(({rows, count}) => res.json({sources: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}


module.exports = {getAll}