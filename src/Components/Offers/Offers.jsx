import React from 'react';
import './Offers.css';
import { useNavigate } from 'react-router-dom';

const Offers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/electronics');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleClick}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src="/assets/exclusive_image.png" alt="" />
      </div>
    </div>
  );
};

export default Offers;
