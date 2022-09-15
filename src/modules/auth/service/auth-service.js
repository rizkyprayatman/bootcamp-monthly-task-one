const { User } = require('../../../database/models');
const bcrypt = require("../../../utils/bcrypt");
const jwt = require('jsonwebtoken');

const AuthService = {
  login: async  (email, password, res) => {
    const user = await User.findOne({
      where: { email },
    });

    if(!user) {
      return res.status(401).json({
        message: 'The email or password is invalid.',
      });
    }

    const isPasssword = await bcrypt.compare(password, user.password);
    if(!isPasssword) {
      return res.status(401).json({
        message: 'The email or password is invalid.',
      });
    }

    const token = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email,
    }, '223012');

    return res.status(200).json({ data: { user, token } });
  },
}

module.exports = AuthService;
