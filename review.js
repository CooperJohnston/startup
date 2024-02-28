var reviews = {
 "Invincible 1" : 0,
    "Invincible 2" : 0,
    "Invincible 4" : 0,
    "Invincible 5" : 0,
    "Invincible 6" : 0,
    "Invincible 7" : 0,
    "Invincible 8" : 0,
    "Invincible 9" : 0
};
localStorage.setItem("Reviews", JSON.stringify(reviews))
function grade(name) {
    score = prompt("What would you rate this out of 5?")
    review = parseInt(score);
    reviews.name = score;
    document.getElementById(name).textContent = ('(' + score + ' out of 5)');
    localStorage.setItem("Reviews", JSON.stringify(reviews))

}
