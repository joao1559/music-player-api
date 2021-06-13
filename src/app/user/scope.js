const validate = require('../../helpers/validacao');

class UserScope {
    // Funções de validação de parametros
    login(params) {
        const contract = new validate.ValidationContract(params);

        try {

            contract.start('login')
                .isString()
                .isNotNull()
                .isRequired()

                .start('pass')
                .isString()
                .isNotNull()
                .isRequired()

                .end()

        } catch (error) {
            error.httpCode = 400;
            throw error
        }
    }

    post(params) {
        const contract = new validate.ValidationContract(params);

        try {

            contract.start('login')
                .isString()
                .isNotNull()
                .isRequired()

                .start('pass')
                .isString()
                .isNotNull()
                .isRequired()

                .start('name')
                .isString()
                .isNotNull()
                .isRequired()

                .end()

        } catch (error) {
            error.httpCode = 400;
            throw error
        }
    }

    refreshToken(params) {
        const contract = new validate.ValidationContract(params);

        try {

            contract.start('accessToken')
                .isString()
                .isNotNull()
                .isRequired()

                .start('refreshToken')
                .isString()
                .isNotNull()
                .isRequired()

                .end()

        } catch (error) {
            error.httpCode = 400;
            throw error
        }
    }
}

module.exports = new UserScope();