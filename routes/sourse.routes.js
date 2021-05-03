const {Router} = require('express')
const Source = require('../controllers/sources.controller')
const router = Router()

router.get('/', Source.getAll)

module.exports = router