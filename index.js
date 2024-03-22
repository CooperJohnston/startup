const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

 // Server port

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Define the /get-reviews endpoint
apiRouter.get('/get-reviews',  (req, res) => {
    res.send(reviews);
});

apiRouter.post('/update-reviews', (req, res) => {
    reviews = update(req.body, reviews);
    res.send(reviews);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});


let reviews = {}
function update(newRev, reviews) {
    for (const name in newRev) {
        reviews[name] = newRev[name];
    }
    return reviews;
}