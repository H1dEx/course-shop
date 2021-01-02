const { body } = require('express-validator/check')

const validators = {
  userValidator: [
    body('email').isEmail().normalizeEmail(),
    body('password')
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 5 })
      .withMessage('must be at least 5 chars long')
      .matches(),
  ],
  loginValidator: [
    body('email').isEmail().normalizeEmail(),
    body('password')
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 5 })
      .withMessage('must be at least 5 chars long')
      .matches(),
  ],
}

module.exports = validators
