const routes = require('express').Router();
const person = require('./person');
const about = require('./about');
const employment = require('./employment');
const gallery = require('./gallery');
const message = require('./message');

routes.use('/', require('./swagger'));
routes.use('/person', person);
routes.use('/about', about);
routes.use('/employment', employment);
routes.use('/gallery', gallery);
routes.use('/message', message)

routes.get('/', (req, res) => {
  res.send('Stewart Rowley');
});

module.exports = routes;
