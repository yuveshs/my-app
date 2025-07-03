import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    regno: '',
    dob: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    alert(`Reg No: ${formData.regno}\nDate of Birth: ${formData.dob}`);
  };

  return (
    <div className="App">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Registration Number:
          <input
            type="text"
            name="regno"
            value={formData.regno}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange}required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
