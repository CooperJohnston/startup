import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    totalRatings: 0,
    comicQuote: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const name = localStorage.getItem('userName');
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const totalRatings = Object.keys(JSON.parse(localStorage.getItem('reviews'))).length;

        // Update state
        setUserData({
          name: name,
          totalRatings: totalRatings,
          comicQuote: data.content
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  };

  return (
    <div>
      <p>Username: {userData.name}</p>
      <ul>
        <li>I have given {userData.totalRatings} total ratings</li>
        <li>Comic book quote of the day: '{userData.comicQuote}'</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <hr/>
          <span className="text-reset">Created By Cooper Johnston</span>
          <a href="https://github.com/CooperJohnston/startup">Cooper Johnston's Github</a>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
