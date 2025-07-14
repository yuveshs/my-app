import React, { useState } from 'react';
import './App.css';

function Register() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (!userName || !password) {
      setMessage("Please enter both username and password");
      setUserData(null);
      return;
    }
    setUserData({ username: userName, password: password });
    setMessage("User registered successfully!");
  };

  return (
    <>
      <div className="continuer">
        <form className="new" onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>

      {message && <p className="message">{message}</p>}

      {userData && (
        <div className="user-data">
          <h3>Registered User Details:</h3>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Password:</strong> {userData.password}</p>
        </div>
      )}
    </>
  );
}

export default Register;
