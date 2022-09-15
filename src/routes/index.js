const categoryController = require('../modules/categories/controller/category-controller');
const projectController = require('../modules/projects/controller/projects-controller');

module.exports = (app) => {

    app.get('/api/category', categoryController.findAll);
    app.get('/api/category/:id', categoryController.findOne);
    app.post('/api/category', categoryController.create);
    app.put('/api/category/:id', categoryController.update);
    app.delete('/api/category/:id', categoryController.delete);

    app.get('/api/project', projectController.findAll);
    app.get('/api/project/:id', projectController.findOne);
    app.post('/api/project', projectController.create);
    app.put('/api/project/:id', projectController.update);
    app.delete('/api/project/:id', projectController.delete);

}

