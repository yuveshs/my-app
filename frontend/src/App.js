import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Register from './Register';
import Login from './login';
function Home() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[message, setMessage] = useState('');
  const [userData, setUserData] = useState([]); // 🆕 State to store user data

  const  handleLogin = async(e)=> {
    try {
      setMessage(''); // Reset message on new login attempt
    e.preventDefault();
    if(!username || !password) {
      setMessage("Please enter both username and password");}
    else{
    const res=await axios.post('http://localhost:3001/login', {
      username,
      password,});

    if(res.status === 200) {
      console.log("Login successful:", res.data);
      navigate('/login');
    }
    else if(res.status === 201) {
      setMessage("User not found");
      
    }
  }
  }
    catch (error) {
      setMessage("Invalid username or password");
      console.error("Login error:", error);
    }
  }
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:3001/register/');
        console.log("Fetched user data:", res.data);
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUser();
  }, []); // ✅ Run only once on component mount

  return (
    <>
      <div className="d1">
        <div className="bu">
          <button className="btn1">Home</button>
          <button className="btn2">About</button>
        </div>
      </div>

      <div>
        <form
          className="logind"
          onSubmit={handleLogin}
        >
          <input
            className="name"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" type="submit">Login</button>
          <button
            className="register"
            type="button"
            onClick={() => navigate('/Register')}
          >
            Register
          </button>
        </form>
      </div>

      {/* 🆕 Display fetched user data */}
       {message && <p className="message">{message}</p>}
      {(
       <div className="user-list">
        <h3>Registered Users:</h3>
        {userData.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul>
            {userData.map((user, index) => (
              <li key={index}>
                Username: {user.username}
                Password: {user.password}
              </li>
            ))}
          </ul>
        )}
      </div>)}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
