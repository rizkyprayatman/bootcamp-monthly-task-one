const categoryController = require('../modules/categories/controller/category-controller');
const projectController = require('../modules/projects/controller/projects-controller');
const loginController = require('../modules/auth/controller/auth-controller');
const validation = require('../middleware/validation');
const auth = require('../middleware/auth');

module.exports = (app) => {

    app.post('/login', validation, loginController.login);

    app.get('/api/category', categoryController.findAll);
    app.get('/api/category/:id', categoryController.findOne);
    app.post('/api/category', categoryController.create);
    app.put('/api/category/:id', categoryController.update);
    app.delete('/api/category/:id', categoryController.delete);

    app.get('/list-project', projectController.findAll);
    app.get('/api/project', auth, projectController.findAll);
    app.get('/api/project/:id', auth, projectController.findOne);
    app.post('/api/project', auth, projectController.create);
    app.put('/api/project/:id', auth, projectController.update);
    app.delete('/api/project/:id', auth, projectController.delete);

}

