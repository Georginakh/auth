// src/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate checking for a registered email
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email) {
      alert("A password reset link has been sent to your email!");
    } else {
      alert("Email not found. Please check and try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remembered your password? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
