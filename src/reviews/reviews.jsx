import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/get-reviews');
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
          localStorage.setItem('reviews', JSON.stringify(data));
        } else {
          throw new Error('Failed to fetch reviews.');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
          setBooks(JSON.parse(storedReviews));
        }
      }
    };

    fetchReviews();
  }, []);

  const review = async (name) => {
    const userName = localStorage.getItem('userName');
    const score = prompt('What would you rate this out of 5?');
    const newScore = { name: userName, score: score, book: name };

    try {
      const response = await fetch('/api/update-reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...books, [name]: score }),
      });

      if (response.ok) {
        const updatedReviews = await response.json();
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
        setBooks(updatedReviews);
        broadcastEvent(userName, 'gameEnd', newScore);
      } else {
        throw new Error('Failed to update reviews.');
      }
    } catch (error) {
      console.error('Error updating reviews:', error);
    }
  };

  const broadcastEvent = (from, type, value) => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    socket.onopen = () => {
      displayMsg('system', 'Database', 'INITIATED');
    };
    socket.onclose = () => {
      displayMsg('system', 'Database', 'disconnected');
    };
    socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === 'gameEnd') {
        displayMsg('User', msg.from, `rated ${msg.value.book} ${msg.value.score} out of 5`);
      } else if (msg.type === 'gameStart') {
        displayMsg('User', msg.from, 'started reviewing');
      }
    };

    const event = {
      from: from,
      type: type,
      value: value,
    };
    socket.send(JSON.stringify(event));
  };

  const displayMsg = (cls, from, msg) => {
    const chatText = document.querySelector('#player-messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  };

  return (
    <div>
      <h2 className="container-fluid bg-secondary text-left">MY LIBRARY: Click on a book to review it!</h2>
      <table className="container-fluid text-center">
        <tr>
          <th className="text-center">Page 1 | Page 2 </th>
          <td id="reviewsContainer">
            {reviewsData.map((review, index) => (
              <div key={index}>
                <button onClick={() => review(review.name.replace(/\s+/g, '_'))}>
                  <img src={review.imageUrl} alt={review.name} />
                </button>
                <span id={review.name.replace(/\s+/g, '_')}>({books[review.name] || 0} out of 5)</span>
              </div>
            ))}
          </td>
        </tr>
      </table>
      <div id="player-messages"></div>
      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <hr />
          <span className="text-reset">Created By Cooper Johnston</span>
          <a href="https://github.com/CooperJohnston/startup">Cooper Johnston's Github</a>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
