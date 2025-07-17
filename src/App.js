import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './Register';
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d1">
        <div className="bu">
          <button className="btn1">Home</button>
          <button className="btn2">About</button>
        </div>
      </div>

      <div>
        <form className="logind" onSubmit={(e) => e.preventDefault()}>
          <input className="name" placeholder="Username" />
          <input className="password" type="password" placeholder="Password" />
          <button className="login">Login</button>
          <button
            className="register"
            type="button"
            onClick={() => navigate('Register')}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
