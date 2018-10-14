const express = require('express');
const routes = express.Router();


const TestController = require('./controllers/TestController')
const ImageController = require('./controllers/ImageController')

// TESTS
routes.get('/tests', TestController.index);
routes.get('/tests/:id', TestController.show);
routes.post('/tests', TestController.store);
routes.put('/tests/:id', TestController.update);
routes.delete('/tests/:id', TestController.destroy);

// IMAGES
routes.get('/images/:id', ImageController.show);
routes.post('/images', ImageController.store);
routes.put('/images/:id', ImageController.update);
routes.delete('/images/:id', ImageController.destroy);


module.exports = routes;