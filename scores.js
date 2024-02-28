function loadScores() {
  let scores = [];
  const scoresText = localStorage.getItem('reviews');
  if (scoresText) {
    scores = JSON.parse(scoresText);
  }

  const tableBodyEl = document.querySelector('#scores');

  if (scores.length) {
    for (const [i, score] of scores.entries()) {

      const nameTdEl = document.createElement('td');
      const scoreTdEl = document.createElement('td');



      nameTdEl.textContent = score.name;
      scoreTdEl.textContent = score;


      const rowEl = document.createElement('tr');

      rowEl.appendChild(nameTdEl);
      rowEl.appendChild(scoreTdEl);
      r

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Go review some books to see what is popular!</td></tr>';
  }
}

loadScores();