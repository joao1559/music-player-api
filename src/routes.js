// Arquivo de rotas

const routes = require('express').Router();

const UserController = require('./app/controllers/UserController');
// const Autenticacao = require('./app/helpers/autenticacao')

routes.post('/login', UserController.login);
routes.post('/user', UserController.post);
routes.post('/refresh-token', UserController.refreshToken);


routes.get('/api', (req, res) => {
    let data = new Date();
    res.status(200).json({ data: data.toLocaleDateString(`pt-BR`) })
});

module.exports = routes;
