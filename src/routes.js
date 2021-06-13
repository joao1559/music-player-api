// Arquivo de rotas

const routes = require('express').Router();

const UserController = require('./app/user/controller');
const MusicController = require('./app/music/controller');
const Autenticacao = require('./helpers/autenticacao')

routes.post('/login', UserController.login);
routes.post('/user', UserController.post);
routes.post('/refresh-token', UserController.refreshToken);
routes.get('/user/:id', Autenticacao.validateToken, UserController.getById);
routes.get('/music', Autenticacao.validateToken, MusicController.get);


routes.get('/api', (req, res) => {
    let data = new Date();
    res.status(200).json({ data: data.toLocaleDateString(`pt-BR`) })
});

module.exports = routes;
