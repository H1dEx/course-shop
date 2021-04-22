const {Course} = require('../models')

function getAllCourses(req, res) {
    return Course.getAll()
        .then(courses => res.json(courses))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

function getCoursesByTag(req, res) {
    return Course.getCourseByTag(req.query.tag)
        .then(courses => res.json(courses))
        .catch(e => res.status(e.statusCode || 400).json({errors: [{msg: e.message}]}))
}

module.exports = {getAllCourses, getCoursesByTag}