import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        onLogin();
        navigate('/reviews');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // User created successfully, navigate to the library page
        navigate('/reviews');
      } else {
        console.error('User creation failed');
      }
    } catch (error) {
      console.error('User creation error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCreateUser}>Create New User</button>
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

export default Login;


