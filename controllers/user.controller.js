const {User} = require('../models')
const bcryptjs = require('bcryptjs')
const validateDecorator = require('../services/validate.decorator')
const {createToken} = require('../services/auth.service')

function create(req, res) {
	console.log(req.body)
	const {email, password} = req.body
	const passwordHash = bcryptjs.hashSync(password)
	return User.create({email, password: passwordHash})
		.then((user) => res.json(user))
		.catch((err) => {
			res.status(err.statusCode || 400).json({error: err.message})
		})
}

function login(req, res, next) {
	const loginUser = req.body
	User.login(loginUser)
		.then(createToken)
		.then((token) => {
			res.json({token})
			next()
		})
		
		.catch((err) => {
			res.status(err.statusCode || 401).json({error: err})
		})
}

module.exports = validateDecorator({create, login})
