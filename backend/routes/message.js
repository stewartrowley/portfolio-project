const routes = require('express').Router();
const message = require('../controller/message');

routes.post('/', message.create);
routes.get('/', message.findAll);
routes.get('/:_id', message.findOne);

module.exports = routes;