const controller = require('../modules/auth/controller/auth-controller');
const validation = require('../middleware/validation');

module.exports = function(express) {
  const route = express.Router();

  route.post('/', validation, controller.login);

  return route;
}
