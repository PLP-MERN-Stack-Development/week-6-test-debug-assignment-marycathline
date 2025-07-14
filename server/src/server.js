const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes'); // optional

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes); // optional

// Error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
