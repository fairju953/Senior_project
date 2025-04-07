import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLatestClick = () => {
    navigate('/textbooks');
  };

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src="/assets/hand_icon.png" alt="" />
          </div>
          <p>supplies</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={handleLatestClick} style={{ cursor: 'pointer' }}>
          <div>Latest Supplies</div>
          <img src="/assets/arrow.png" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src="/assets/hero_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
