const {Course} = require('../models')
const models = require('../models/index')

function getAllCourses(req, res) {
    const {page = 1, count} = req.query;
    return Promise.all([Course.getAll(+page, +count), Course.count()])
        .then(([courses, count]) => res.json({courses, count}))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

function getCoursesByTag(req, res) {
    return models.Course.findAll({
        include: [{
            model: models.Category,
            where: {tag: req.params.tag}
        }]
    })
        .then(courses => res.json(courses))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCourses, getCoursesByTag}