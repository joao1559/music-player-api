const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '.env' });

class UserService {
    // Funções auxiliares

    // Pega o base64 do arquivo e o transforma em texto, lendo o conteudo do arquivo
    base64ToString(base64) {
        return Buffer.from(base64, 'base64').toString('utf8');
    }

    login(user) {
        return jwt.sign({ login: user.login }, process.env.SECRET);
    }
}

module.exports = new UserService();