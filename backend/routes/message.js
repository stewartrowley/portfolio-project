const routes = require('express').Router();
const gallery = require('../controller/message');

routes.post('/', gallery.create);
routes.get('/', gallery.findAll);
routes.get('/:_id', gallery.findOne);

module.exports = routes;