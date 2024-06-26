import React, { useEffect, useState } from 'react';

const Scores = () => {
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/get-reviews');
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
          localStorage.setItem('reviews', JSON.stringify(data));
        } else {
          throw new Error('Failed to fetch reviews.');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        const storedReviews = localStorage.getItem('reviews');
        if (storedReviews) {
          setReviews(JSON.parse(storedReviews));
        }
      }
    };

    fetchReviews();
  }, []);

  const updateReviews = async (reviews) => {
    try {
      const response = await fetch('/api/update-reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviews),
      });

      if (response.ok) {
        const updatedReviews = await response.json();
        setReviews(updatedReviews);
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      } else {
        throw new Error('Failed to update reviews.');
      }
    } catch (error) {
      console.error('Error updating reviews:', error);
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  };

  const displaySortedReviews = () => {
    const reviewsArray = Object.entries(reviews);
    reviewsArray.sort((a, b) => b[1] - a[1]);

    return reviewsArray.map(([name, score]) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{score}</td>
      </tr>
    ));
  };

  return (
    <div className="container-fluid bg-secondary text-left">
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>Issue and Number</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{displaySortedReviews()}</tbody>
      </table>

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

export default Scores;

