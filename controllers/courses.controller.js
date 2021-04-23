const {Course} = require('../models')

function getAllCourses(req, res) {
    const {page = 1, count} = req.query;
    return Course.getAll(+page, +count)
        .then(courses => res.json(courses))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

function getCoursesByTag(req, res) {
    return Course.getCourseByTag(req.query.tag)
        .then(courses => res.json(courses))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCourses, getCoursesByTag}