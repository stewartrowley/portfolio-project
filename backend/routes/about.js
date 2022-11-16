const routes = require('express').Router();
const about = require('../controller/about');

routes.post('/', about.create);
routes.get('/', about.findAll);
routes.get('/:_id', about.findOne);
routes.put('/:_id', about.updateAbout)

module.exports = routes;