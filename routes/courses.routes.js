const {Router} = require('express')
const CoursesController = require('../controllers/courses.controller')

const router = Router()

router.get('/', CoursesController.getCourses)

module.exports = router