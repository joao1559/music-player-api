const repository = require('./repository');
const service = require('./service');
const scope = require('./scope');

class UserController {
    // Login
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

    // Register
    async post(req, res) {
        try {
            const params = {
                login: req.body.login || null,
                pass: req.body.pass || null,
                name: req.body.name || null
            };

            scope.post(params)
            await repository.post(params)
            const tokens = service.login(params);

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

    // Refresh token
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

    async getById(req, res) {
        try {
            const { id } = req.params

            const user = await repository.getById(id)
            if (!user) throw { httpCode: 404, message: 'User not found' }

            return res
                .status(200)
                .json(user)

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