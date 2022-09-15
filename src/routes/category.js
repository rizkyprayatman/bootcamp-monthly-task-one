const controller = require('../modules/categories/controller/category-controller');


module.exports = function (express) {
    const route = express.Router();

    route.get('/api/category', controller.findAll);
    route.get('/api/category/:id', controller.findOne);
    route.post('/api/category', controller.create);
    route.put('/api/category/:id', controller.update);
    route.delete('/api/category/:id', controller.delete);

    return route;
}
