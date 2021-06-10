const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env' });

module.exports = {
    validateToken
}

function validateToken(req, res, next) {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
        const result = jwt.verify(token, process.env.SECRET)
        req.user = result
        next()
    } catch (error) {
        res.status(401).json({ error })
    }
}