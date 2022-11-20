const routes = require('express').Router();
const gallery = require('../controller/gallery');

routes.post('/', gallery.create);
routes.get('/', gallery.findAll);
routes.get('/:_id', gallery.findOne);
routes.put('/:_id', gallery.updateGallery)

module.exports = routes;