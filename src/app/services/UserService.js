const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '.env' });

class UserService {
    // Funções auxiliares

    // Pega o base64 do arquivo e o transforma em texto, lendo o conteudo do arquivo
    base64ToString(base64) {
        return Buffer.from(base64, 'base64').toString('utf8')
    }

    login(user) {
        return {
            accessToken: jwt.sign({ login: user.login }, process.env.SECRET, { expiresIn: '5h' }),
            refreshToken: jwt.sign({ login: user.login }, process.env.SECRET, { expiresIn: '10h' })
        };
    }

    refreshToken(params) {
        try {
            const result = jwt.verify(params.refreshToken, process.env.SECRET)
            return this.login(result.login)
        } catch (e) {
            e.httpCode = 401
            return e
        }
    }
}

module.exports = new UserService();