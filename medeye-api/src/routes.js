const express = require('express');
const routes = express.Router();

const TestController = require('./controllers/TestController')
routes.get('/tests', TestController.index);
routes.get('/tests/:id', TestController.show);
routes.post('/tests', TestController.store);
routes.put('/tests/:id', TestController.update);
routes.delete('/tests/:id', TestController.destroy);



module.exports = routes;