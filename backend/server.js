// Required dependencies
const path = require('path');
const express = require('express');
const bp = require('body-parser');
const app = express();

const weather = require('./controllers/weather')

// Dotenv package
require('dotenv').config();

// Port number
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// Handle POST requests to /api/weather route
app.post('/api/weather', weather);

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
// });
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});