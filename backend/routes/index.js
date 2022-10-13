const routes = require('express').Router();
const person = require('./person');

routes.use('/', require('./swagger'));
routes.use('/person', person);

routes.get('/', (req, res) => {
  res.send('Stewart Rowley');
});

module.exports = routes;
