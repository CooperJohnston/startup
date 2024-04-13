import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const display = () => {
      fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
          const user = document.getElementById('Usa');
          const name = localStorage.getItem('userName');
          user.textContent = 'Username: ' + name;

          const facts = document.createElement('ul');
          const l = document.createElement('li');
          l.textContent =
            'I have given ' +
            Object.keys(JSON.parse(localStorage.getItem('reviews'))).length +
            ' total ratings';
          facts.appendChild(l);
          const b = document.createElement('li');
          b.textContent = "Comic book quote of the day: '" + data.content + "'";
          facts.appendChild(b);
          user.appendChild(facts);
        });
    };

    display();
  }, []);

  const logout = () => {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  };

  return (
    <div>
      <p id="Usa"></p>
      <button onClick={logout}>Logout</button>

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
