const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);

  if (! errors.isEmpty()) {
    res.status(422).json({ errors: errors.errors });
  }

  next();
};
