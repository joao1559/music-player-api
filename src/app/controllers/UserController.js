const repository = require('../repositories/UserRepository');
const service = require('../services/UserService');
const scope = require('../scopes/UserScope');

class UserController {
    // Funções chamadas pela rota
    async login(req, res) {
        try {
            const params = {
                login: req.body.login || null,
                pass: req.body.pass || null
            };

            scope.login(params)

            const user = await repository.login(params)
            if (!user) throw { httpCode: 404, message: 'User and password not found' }

            const tokens = service.login(user);
            return res
                .status(200)
                .json(tokens)

        } catch (error) {
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }

    async post(req, res) {
        try {
            const params = {
                login: req.body.login || null,
                pass: req.body.pass || null,
                name: req.body.name || null
            };

            scope.post(params)
            await repository.post(params)

            return res
                .status(200)
                .json({
                    result: 'success'
                })

        } catch (error) {
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }

    async refreshToken(req, res) {
        try {
            const params = {
                accessToken: req.body.accessToken || null,
                refreshToken: req.body.refreshToken || null
            };

            scope.refreshToken(params)
            const tokens = service.refreshToken(params)

            return res
                .status(200)
                .json(tokens)

        } catch (error) {
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }
}

module.exports = new UserController()