const path = require("path")
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Test message" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
  

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});