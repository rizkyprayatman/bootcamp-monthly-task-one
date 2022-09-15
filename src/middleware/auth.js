const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }

  try {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, '223012');
  } catch (err) {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }

  next();
};
