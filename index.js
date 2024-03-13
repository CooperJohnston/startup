const express = require('express');
const fs = require('fs').promises; // For file operations with async/await
const path = require('path');
const port = process.argv.length > 2 ? process.argv[2] : 3000;
const app = express();
; // Server port

app.use(express.json());
app.use(express.static('public'));
// Define the /get-reviews endpoint
app.get('/get-reviews', async (req, res) => {
    try {
        // Assuming reviews.json is located in the same directory as your server script
        const data = await fs.readFile(path.join(__dirname, 'reviews.json'), 'utf8');
        const reviews = JSON.parse(data);
        res.json(reviews);
    } catch (error) {
        console.error('Failed to read reviews:', error);
        res.status(500).send('Error getting the reviews.');
    }
});

app.post('/update-reviews', async (req, res) => {
    try {
        const newReviews = req.body; // Data sent from the client
        await fs.writeFile(path.join(__dirname, 'reviews.json'), JSON.stringify(newReviews, null, 2), 'utf8');
        res.status(200).send('Reviews updated successfully.');
    } catch (error) {
        console.error('Failed to update reviews:', error);
        res.status(500).send('Error updating the reviews.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});