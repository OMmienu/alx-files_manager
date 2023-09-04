// Import required modules
const express = require('express');
const routes = require('./routes'); // Import your routes from routes/index.js

// Create an Express application
const app = express();

// Define the port to listen on (default to 5000)
const port = process.env.PORT || 5000;

// Load routes from the routes/index.js file
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
