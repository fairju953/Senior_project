import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() !== '') {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 2500);
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Student Discount Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {showSuccess && (
        <div className="newsletter-success-popup">
          ✅ Thank you! You've been subscribed.
        </div>
      )}
    </div>
  );
};

export default NewsLetter;
