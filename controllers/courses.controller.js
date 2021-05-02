const {Course, Category} = require('../models')

function getAllCourses(req, res) {
    const {page = 1, count} = req.query;
    return Promise.all([Course.getAll(+page, +count), Course.count()])
        .then(([courses, count]) => res.json({courses, count}))
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
    })
        .then(({rows, count}) => res.json({courses: rows, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCourses, getCoursesByTag}