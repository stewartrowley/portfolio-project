const routes = require('express').Router();
const person = require('../controller/person');

routes.post('/', person.create)
routes.get('/', person.findAll);
routes.get('/:_id', person.findOne);


module.exports = routes;