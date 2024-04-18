import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login/login';
import Profile from './userInfo/userInfo';
import Reviews from './reviews/reviews';
import Scores from './scores/scores';
import './app.css'; // Import the app.css file

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container-fluid"> {/* Use container-fluid to make the navbar stretch */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              My App
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">
                        User
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/reviews">
                        MyBooks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/scores">
                        Myinfo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-danger" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/scores" element={<Scores />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
