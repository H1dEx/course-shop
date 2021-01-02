const { User } = require('../models')
const bcryptjs = require('bcryptjs')
const validateDecorator = require('../services/validate.decorator')
const { createToken } = require('../services/auth.service')

function create(req, res, next) {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        return Promise.reject({
          statusCode: 422,
          message: 'This email is already used',
        })
      } else {
        const { login, email, password } = req.body
        const passwordHash = bcryptjs.hashSync(password)
        return User.create({ login, email, password: passwordHash })
      }
    })
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(err.statusCode || 400).json({ error: err.message })
    })
}

function login(req, res, next) {
  const loginUser = req.body
  User.login(loginUser)
    .then(createToken)
    .then((token) => {
      res.json({ token })
      next()
    })

    .catch((err) => {
      res.status(err.statusCode || 401).json({ error: err })
    })
}

module.exports = validateDecorator({ create, login })
