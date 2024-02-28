const reviewsData = [
  { name: 'Invincible 1', imageUrl: 'https://imagecomics.com/files/releases/_1200x630_fit_center-center_82_none/Invincible_01-1.jpg?mtime=1614296272' },
  { name: 'Invincible 2', imageUrl: 'https://cdn.imagecomics.com/assets/i/releases/16642/invincible-2_6188b1a0f9.jpg' },
  { name: 'Invincible 3', imageUrl: 'https://cdn.imagecomics.com/assets/i/releases/16641/invincible-3_a0debff1bf.jpg' }
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

class reviews {
    constructor() {
    const storedReviews = localStorage.getItem("Reviews");
    this.books = storedReviews ? JSON.parse(storedReviews) : {};
        this.populateReviews(); }
    // Call a method to populate the reviews on page load.
populateReviews() {
        for (const name in this.books) {
            const score = this.books[name];
            const issueReview = document.getElementById(name);
            if (issueReview) { // Check if the element exists.
                issueReview.textContent = `(${score} out of 5)`;
            }
        }
    }

   review(name){

        let score = prompt("What would you rate this out of 5?")
        const issueReview = document.getElementById(name);
        issueReview.textContent = ('(' + score + ' out of 5)');
        this.books[name] = score;
        localStorage.setItem("Reviews", JSON.stringify(this.books))
    }
}

 const r = new reviews();