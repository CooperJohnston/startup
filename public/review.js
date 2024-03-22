const reviewsData = [
  { name: 'Invincible 1', imageUrl: 'https://imagecomics.com/files/releases/_1200x630_fit_center-center_82_none/Invincible_01-1.jpg?mtime=1614296272' },
    {name: 'Teenage Mutant Ninja Turtles #1', imageUrl: 'https://recalledcomics.com/TeenageMutantNinjaTurtles1First.jpg'},
    {name: 'X-Men #1', imageUrl: 'https://m.media-amazon.com/images/I/A1sDFbEdvpL._AC_UF1000,1000_QL80_.jpg'},
  { name: 'Invincible 2', imageUrl: 'https://cdn.imagecomics.com/assets/i/releases/16642/invincible-2_6188b1a0f9.jpg' },
  { name: 'Invincible 3', imageUrl: 'https://cdn.imagecomics.com/assets/i/releases/16641/invincible-3_a0debff1bf.jpg' },
    {name: 'Amazing Spider-Man #36', imageUrl: "https://cdn.marvel.com/u/prod/marvel/i/mg/f/f0/57a0effdbd688/clean.jpg"},
    {name: 'JLA #1', imageUrl: "https://www.budsartbooks.com/wp-content/uploads/2020/06/jlagh-jla-grant-morrison-omni-book.jpg"},
    {name: 'Naruto Volume 8', imageUrl: 'https://m.media-amazon.com/images/I/917NoDyUC-L._AC_UF1000,1000_QL80_.jpg'},
];
const container = document.getElementById('reviewsContainer');

reviewsData.forEach(review => {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttonContainer';

    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = review.imageUrl;
    img.alt = review.name;
    button.appendChild(img);

    const span = document.createElement('span');
    span.id = review.name.replace(/\s+/g, '_');

    const paragraph = document.createElement('p');
    paragraph.textContent = `${review.name} `;
    paragraph.appendChild(span);
      paragraph.textContent = `${review.name} `;
  paragraph.appendChild(span);

  button.onclick = () => r.review(review.name.replace(/\s+/g, '_')); // Ensure function call is correctly set up

  buttonContainer.appendChild(button);
  //buttonContainer.appendChild(paragraph); // Include if you want the text to be part of the button container

  container.appendChild(buttonContainer);
  // Alternatively, append paragraph to container separately if outside of buttonContainer
  container.appendChild(paragraph);
});

class Reviews {
    constructor() {
        const storedReviews = localStorage.getItem("reviews");
        this.books = storedReviews ? JSON.parse(storedReviews) : {};
        this.populateReviews();
        updateReviews(this.books);
    }

    async fetchReviews() {
        try {
            const response = await fetch('/api/get-reviews');
            if (response.ok) {
                const data = await response.json();
                this.books = data;
                if (this.books === {}){
                    this.books = JSON.parse(localStorage.getItem("reviews"));
                }
                this.populateReviews();
            } else {
                throw new Error('Failed to fetch reviews.');
            }
        } catch (error) {
            this.books = JSON.parse(localStorage.getItem("reviews"));
            console.error('Error fetching reviews:', error);
        }
    }

    populateReviews() {
        for (const name in this.books) {
            const score = this.books[name];
            const issueReview = document.getElementById(name);
            if (issueReview) { // Check if the element exists.
                issueReview.textContent = `(${score} out of 5)`;
            }
        }
    }

    review(name) {
        let score = prompt("What would you rate this out of 5?");
        const issueReview = document.getElementById(name);
        issueReview.textContent = ('(' + score + ' out of 5)');
        this.books[name] = score;
        localStorage.setItem("reviews", JSON.stringify(this.books))
         // Assumes updateReviews makes a backend call.
    }
}

async function updateReviews(reviews) {
  try {
    const response = await fetch('/api/update-reviews', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviews),
    });
    const updatedReviews = await response.json();
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  } catch (error) {
      localStorage.setItem("reviews", JSON.stringify(reviews));

  }
}

 const r = new Reviews();
