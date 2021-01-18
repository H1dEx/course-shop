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
    let token
    if (req.headers.authorization) {
        token = req.headers.authorization
        token = token.replace(/bearer|jwt\s*/i, '')
        jwt.verify(token, config.secret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({error: 'Failed to authenticate token'})
                return
            }
            req.userId = decodedToken.id
            next()
        })
    } else {
        res.status(401).json({error: 'No token provided'})
    }
}

module.exports = {
    createToken,
    verifyToken,
}
