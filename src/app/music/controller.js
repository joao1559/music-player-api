const repository = require('./repository');
const service = require('./service');
const scope = require('./scope');

class MusicController {
    // Login
    async get(req, res) {
        try {
            const params = {
                search: req.query.search || null
            };

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

    async getMusicFile(req, res) {
        try {
            const params = {
                id: req.params.id || null
            };

            scope.getMusicFile(params)

            const musics = await repository.getMusicFile(params)

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
}

module.exports = new MusicController()