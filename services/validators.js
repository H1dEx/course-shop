const {User} = require('../models')
const {body} = require('express-validator')

const validators = {
	userValidator: [
		body('email')
			.isEmail()
			.normalizeEmail()
			.custom(value => {
				return User.findOne({
					where: {
						email: value,
					}
				}).then((user) => {
					if (user) {
						return Promise.reject({
							statusCode: 422,
							message: 'This email is already used',
						})
					}
				})
			}),
		body('password')
			.not()
			.isEmpty()
			.trim()
			.isLength({min: 5})
			.withMessage('must be at least 5 chars long'),
		body('confirmPassword')
			.custom((value, {req}) => {
				if (value !== req.body.password)
					throw new Error("Passwords don't match")
				return value
			})
	],
	loginValidator: [
		body('email', 'Incorrect email').isEmail().normalizeEmail(),
		body('password', 'Incorrect password')
			.not()
			.isEmpty()
			.trim()
			.isLength({min: 5})
			.withMessage('Password must be at least 5 chars long'),
	],
}

module.exports = validators
