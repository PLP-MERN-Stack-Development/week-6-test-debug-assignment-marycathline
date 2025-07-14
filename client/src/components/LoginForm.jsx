import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      {loggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username"
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

