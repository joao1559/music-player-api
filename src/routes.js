// Arquivo de rotas

const routes = require('express').Router();
const Autenticacao = require('./helpers/autenticacao')

const UserController = require('./app/user/controller');
const MusicController = require('./app/music/controller');
const PlaylistController = require('./app/playlist/controller');

routes.post('/login', UserController.login);
routes.post('/user', UserController.post);
routes.post('/refresh-token', UserController.refreshToken);
routes.get('/user/:id', Autenticacao.validateToken, UserController.getById);
routes.get('/music', Autenticacao.validateToken, MusicController.get);
routes.get('/music/recommended', Autenticacao.validateToken, MusicController.getRecommended);
routes.get('/playlist/top', Autenticacao.validateToken, PlaylistController.getTop);
routes.get('/playlist', Autenticacao.validateToken, PlaylistController.getByUser);


routes.get('/api', (req, res) => {
    let data = new Date();
    res.status(200).json({ data: data.toLocaleDateString(`pt-BR`) })
});

module.exports = routes;
