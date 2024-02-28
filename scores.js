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

// Assuming this is your reviews object with sample data
const reviews = {
    "Invincible 1": 5,
    "Invincible 2": 4,
    "Invincible 3": 5,
    // Add more reviews as needed
};

// Call the function to display the sorted reviews when appropriate
displaySortedReviews(JSON.parse(localStorage.getItem("Reviews")));
