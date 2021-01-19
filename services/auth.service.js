const jwt = require('jsonwebtoken')
const config = require('../config/config')

function createToken(userFromDb) {
    return {
        token: jwt.sign({id: userFromDb.dataValues.id}, config.secret, {
            expiresIn: 86400,
        }), userId: userFromDb.dataValues.id
    }
}

function verifyToken(req, res, next) {
    try {
        let token
        if (req.headers.authorization) {
			token = req.headers.authorization
            const decodedToken = jwt.verify(token, config.secret)
            req.userId = decodedToken.id
            next()
        } else {
            throw new Error('No authorized')
        }
    } catch (e) {
        res.status(401).json({error: 'No authorized'})
    }
}

module.exports = {
    createToken,
    verifyToken,
}
