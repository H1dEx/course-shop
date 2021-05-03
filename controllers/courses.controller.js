const {Course, Category, Source} = require('../models')

function getCourses(req, res) {
    const {source, category} = req.query
    if (category) return getCoursesByCategory(req, res)
    if (source) return getCoursesBySource(req, res)
    return getAll(req, res)
}

function getAll(req, res) {
    const {page = 1, count} = req.query;
    return Course.findAndCountAll({
        limit: +count,
        offset: +(page - 1) * count,
        include: [{model: Source, attributes: ['name']}],
        attributes: {exclude: ['SourceId']}
    })
        .then(courses => {
            if (!courses)
                throw new Error("Not found");
            return courses
        })
        .then(({rows, count}) => res.json({courses: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

function getCoursesByCategory(req, res) {
    const {page = 1, count, category} = req.query;
    return Course.findAndCountAll({
        limit: +count,
        offset: +(page - 1) * count,
        include: [{
            model: Category,
            where: {tag: category},
            attributes: []
        },
            {model: Source, attributes: ['name']}
        ],
        attributes: {exclude: ['SourceId']}
    })
        .then(({rows, count}) => res.json({courses: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

const getCoursesBySource = (req, res) => {
    const {page = 1, count, source} = req.query;
    return Course.findAndCountAll({
        limit: +count,
        offset: +(page - 1) * count,
        include: [{
            model: Source,
            where: {name: source},
            attributes: ['name']
        }],
        attributes: {exclude: ['SourceId']}
    })
        .then(({rows, count}) => res.json({courses: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getCourses}