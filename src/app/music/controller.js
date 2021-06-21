const repository = require('./repository');
const scope = require('./scope');

class MusicController {
    // Login
    async get(req, res) {
        try {
            const params = {
                search: req.query.search || ''
            }

            scope.get(params)

            const musics = await repository.get(params)

            return res
                .status(200)
                .json({musics: musics})

        } catch (error) {
            console.log(error)
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }

    async getRecommended(req, res) {
        try {
            const musics = await repository.getRecommended()

            return res
                .status(200)
                .json({musics})

        } catch (error) {
            console.log(error)
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }
}

module.exports = new MusicController()