import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Register() {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!username || !password) {
      setMessage("Please enter both username and password");
      setUserData(null);
      return;
    }
    try{
    const res=await axios.post('http://localhost:3001/register', {
      username,
      password,});
      if(res.status === 200) {
      setUserData({ username: username, password: password });
    setMessage("User registered successfully!");}
    else {
      setMessage("User registration failed. Please try again.");
      setUserData(null);}
    }
    catch{
      setMessage("Error registering user. Please try again.");
    }
    
  };

  return (
    <>
      <div className="continuer">
        <form className="new" onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setuserName(e.target.value)}
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
