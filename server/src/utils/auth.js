// src/utils/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

      const user = await User.findById(decoded.id).select('-password');
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = user;
      return next();
    }

    return res.status(401).json({ message: 'No token provided' });
  } catch (err) {
    console.error('Auth Error:', err.message);
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = { protect };
