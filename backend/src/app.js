const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const contactRoutes = require('./routes/contactRoutes'); // Import the contact routes

const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN })); // Configure CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);
app.use('/api', contactRoutes); // Use the contact routes

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;