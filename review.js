

class reviews {
    constructor() {
        this.books = window.localStorage.getItem("Reviews");

    }
   review(name) {
        let scores = []
        let score = prompt("What would you rate this out of 5?")
        const issueReview = document.getElementById(name);
        issueReview.textContent = ('(' + score + ' out of 5)');

        if (this.books) {
            scores = JSON.parse(this.books)

        }
        const newScore = {name: name, score: score};
        scores.push(newScore);
        localStorage.setItem("Reviews", JSON.stringify(scores))
        this.books = window.localStorage.getItem("Reviews");

    }
}

 const r = new reviews();