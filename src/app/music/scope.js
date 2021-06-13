const validate = require('../../helpers/validacao');

class MusicScope {
    // Funções de validação de parametros
    get(params) {
        const contract = new validate.ValidationContract(params);

        try {
            contract.start('search')
                .isString()

                .end()

        } catch (error) {
            error.httpCode = 400;
            throw error
        }
    }
}

module.exports = new MusicScope();