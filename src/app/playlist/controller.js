const repository = require('./repository');

class PlaylistController {
    async getTop(req, res) {
        try {
            const playlists = await repository.getTop()

            return res
                .status(200)
                .json({playlists})

        } catch (error) {
            console.log(error)
            return res
                .status(error.httpCode || 500)
                .json({
                    error
                })
        }
    }

    async getByUser(req, res) {
        try {
            const playlists = await repository.getByUser(req.user)

            return res
                .status(200)
                .json({playlists})

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

module.exports = new PlaylistController()