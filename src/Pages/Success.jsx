import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="success-container">
      <h2>🎉 Signup Successful!</h2>
      <p>Welcome to StudyStock. You're all set.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Success;
