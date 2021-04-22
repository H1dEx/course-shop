const {Router} = require('express')
const CoursesController = require('../controllers/courses.controller')

const router = Router()

router.get('/', CoursesController.getAllCourses)
router.get('/:tag', CoursesController.getCoursesByTag)

module.exports = router