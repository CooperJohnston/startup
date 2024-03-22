function displaySortedReviews(reviews) {
    // Convert the reviews object into an array of [name, score] pairs
    const reviewsArray = Object.entries(reviews);

    // Sort the array based on score in descending order; when scores are equal, it maintains the original order
    reviewsArray.sort((a, b) => b[1] - a[1]);

    // Select the tbody element where scores will be inserted
    const scoresBody = document.getElementById("scores");
    scoresBody.innerHTML = ""; // Clear existing tbody contents

    // Populate the tbody with sorted review data
    reviewsArray.forEach(([name, score]) => {
        const row = scoresBody.insertRow(-1); // -1 ensures the row is added at the end of the tbody
        const cellName = row.insertCell(0);
        const cellScore = row.insertCell(1);
        cellName.textContent = name;
        cellScore.textContent = score;
    });
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
    localStorage.setItem("reviews", JSON.stringify(reviews))
  } catch (error) {
      localStorage.setItem("reviews", JSON.stringify(reviews));

  }
}
async function fetchReviews() {

        try {
            const response = await fetch('/api/get-reviews');
            reviews = await response.json();


        } catch {
            reviews = JSON.parse(localStorage.getItem("reviews"));

        }
        displaySortedReviews(reviews);
    }



// Call the function to display the sorted reviews when appropriate
fetchReviews();
