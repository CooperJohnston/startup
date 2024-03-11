const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(cookieParser());

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);


const fs = require('fs').promises;
const path = require('path');

const REVIEWS_FILE_PATH = path.join(__dirname, 'public', 'reviews.json');

// Function to load reviews from the file
async function loadReviews() {
    try {
        const data = await fs.readFile(REVIEWS_FILE_PATH, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading the reviews file:', error);
        return []; // Return an empty array if the file doesn't exist or can't be read
    }
}

// Function to save reviews to the file
async function saveReviews(reviews) {
    try {
        await fs.writeFile(REVIEWS_FILE_PATH, JSON.stringify(reviews, null, 2));
    } catch (error) {
        console.error('Error writing to the reviews file:', error);
    }
}
// Modified GET route to load reviews from file
apiRouter.get('/reviews', async (_req, res) => {
    const reviews = await loadReviews();
    res.json(reviews);
});

// Modified POST route to update reviews and save to file
apiRouter.post('/reviews', async (req, res) => {
    let reviews = await loadReviews(); // Load existing reviews
    reviews = updateScores(req.body, reviews); // Add/update review
    await saveReviews(reviews); // Save updated reviews back to file
    res.json(reviews); // Respond with updated reviews
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
