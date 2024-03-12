const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');
const port = process.argv.length > 2 ? process.argv[2] : 3000;
const app = express();

app.use(cookieParser());
app.use(express.json()); // Use this for JSON parsing
app.use(express.static('public')); // Serve static files

// Define your routes here
app.post('/update-reviews', (req, res) => {
  const reviews = req.body;
  const filePath = path.join(__dirname, 'reviews.json');

  fs.writeFile(filePath, JSON.stringify(reviews, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating reviews.');
    }
    res.send('Reviews updated successfully.');
  });
});

// Initiate the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});