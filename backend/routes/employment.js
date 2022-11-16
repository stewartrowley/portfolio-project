const routes = require('express').Router();
const employment = require('../controller/employment');

routes.post('/', employment.create);
routes.get('/', employment.findAll);
routes.get('/:_id', employment.findOne);
routes.put('/:_id', employment.updateEmployment)

module.exports = routes;