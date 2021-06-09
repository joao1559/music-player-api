// Arquivo de rotas

const routes = require('express').Router();

const UserController = require('./app/controllers/UserController');
// const Autenticacao = require('./app/helpers/autenticacao')

routes.post('/login', UserController.login);
routes.post('/user', UserController.post);


routes.post('/api', (req, res) => {
    res.status(200).json({data: Date.now()})
});

module.exports = routes;
