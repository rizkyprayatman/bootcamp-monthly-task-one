const AuthService = require('../service/auth-service.js');

const AuthController = {
  login: async  (req, res) => {
    const { email, password } = req.body;

    return await AuthService.login(email, password, res);
  },
}

module.exports = AuthController;
