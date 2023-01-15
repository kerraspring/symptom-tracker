const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/symptom-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/symptom-history', require('./routes/symptom-history'));

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/dashboard', (req, res) => {
  res.send('Dashboard page');
});

app.get('/login', (req, res) => {
  res.send('Login page');
});

app.get('/signup', (req, res) => {
  res.send('Signup page');
});

app.get('/symptom-history', (req, res) => {
  res.send('Symptom history page');
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Oops! Something went wrong.'
    }
  });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
