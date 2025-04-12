import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!agreed) {
      alert('✅ Please agree to the terms before continuing.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        navigate('/success');
      } else {
        alert('❌ Registration failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong.');
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1> Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
