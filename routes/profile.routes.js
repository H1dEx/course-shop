const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const {verifyToken} = require("../services/auth.service");

const router = Router()

router.get('/', verifyToken, UserController.getProfile)
router.post('/', verifyToken, UserController.setProfile, UserController.getProfile)
module.exports = router