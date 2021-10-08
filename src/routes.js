const express =  require('express');
const routes = express.Router();
const AnnotationsController = require('./controllers/AnnotetionController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

//Rota de Annotations
routes.post('/annotations', AnnotationsController.create);
routes.get('/annotations', AnnotationsController.read);
routes.delete('/annotations/:id', AnnotationsController.delete);

//Rota Priority
routes.get('/priorities', PriorityController.rend);
routes.post('/priorities/:id', PriorityController.update);


//Rota Content 
routes.post('/contents/:id', ContentController.update);

module.exports = routes;