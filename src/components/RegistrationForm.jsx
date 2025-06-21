import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

  function RegistrationForm() {
    const [dob, setDob] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [prediction, setPrediction] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle registration logic here
      axios.post('https://api-for-numerology-reader-jun21-540pm-25s-rohan-shah-beta.platform.beta.sidepro.app/api/users', { name, email, dob })
        .then(response => {
          alert(`Name: ${name}\nEmail: ${email}\nDOB: ${dob}`);
          response.data.prediction && setPrediction(response.data.prediction);
        })
        .catch(error => {
          alert('Error:' + error);
        });
    };

    return (
      <>
        <h2> Make numerological predictions </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: 300 }}>
          <label className="form-label">
            Name:
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            Date of Birth:
            <input
              type="date"
              className="form-input"
              value={dob}
              onChange={e => setDob(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btnSubmit" style={{ marginTop: 12 }}>Submit</button>
        </form>
        <p>
          {prediction && <strong>Prediction: {prediction}</strong>}
        </p>
      </>
    );
  }

  export default RegistrationForm;