const {Course, Category, Source} = require('../models')

function getAllCourses(req, res) {
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

function getCoursesByTag(req, res) {
    const {page = 1, count} = req.query;
    return Course.findAndCountAll({
        limit: +count,
        offset: +(page - 1) * count,
        include: [{
            model: Category,
            where: {tag: req.params.tag},
            attributes: []
        }],
        attributes: {exclude: ['SourceId']}
    })
        .then(({rows, count}) => res.json({courses: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCourses, getCoursesByTag}