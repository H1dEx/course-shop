const {Router} = require('express');
const {userValidator, loginValidator} = require('../services/validators');
const UserController = require('../controllers/user.controller');

const router = Router()

router.post("/sign-up", userValidator, UserController.create)
router.post("/sign-in", loginValidator, UserController.login )

module.exports = router