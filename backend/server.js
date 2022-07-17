const path = require('path');
const express = require('express');
const bp = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({ message: 'Test message' });
});

// Handle POST requests to /api/data route
app.post('/api/data', (req, res) => {
    res.json({ receivedData: req.body.postedData });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});