const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const validateDecorator = require('../services/validate.decorator')
const {createToken} = require('../services/auth.service')

function create(req, res) {
    const {email, password} = req.body;
    const passwordHash = bcryptjs.hashSync(password);
    return User.create({email, password: passwordHash})
        .then((user) => res.json(user))
        .catch((err) => {
            res.status(err.statusCode || 400).json({
                errors: [{msg: err.message}]
            })
        })
}

function login(req, res, next) {
    const loginUser = req.body
    User.login(loginUser)
        .then(createToken)
        .then(({token, userId}) => {
            res.json({token, userId})
            next()
        })

        .catch((err) => {
            res.status(err.statusCode || 401).json({
                errors: [{msg: err.message}]
            })
        })
}

module.exports = validateDecorator({create, login})
