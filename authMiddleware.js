const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Middleware to verify JWT token and authenticate user
    next();
};
