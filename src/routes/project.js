const Controller = require('../modules/projects/controller/projects-controller');


module.exports = function (express) {
    const route = express.Router();

    route.get('/api/project', Controller.findAll);
    route.get('/api/project/:id', Controller.findOne);
    route.post('/api/project', Controller.create);
    route.put('/api/project/:id', Controller.update);
    route.delete('/api/project/:id', Controller.delete);

    return route;
}
