const Controller = require('../modules/projects/controller/projects-controller');
const auth = require('../middleware/auth');


module.exports = function (express) {
    const route = express.Router();

    route.get('/all', Controller.findAll);
    route.get('/', auth, Controller.findAll);
    route.get('/:id', auth, Controller.findOne);
    route.post('/', auth, Controller.create);
    route.put('/:id', auth, Controller.update);
    route.delete('/:id', auth, Controller.delete);

    return route;
}
