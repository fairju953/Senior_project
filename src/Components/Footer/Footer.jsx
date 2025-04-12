import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src="/assets/logo_big.png" alt="StudyStock Logo" className="footer-logo-img" />
        <p>StudyStock</p>
      </div>
      <ul className="footer-links">
        <p onClick={() => navigate('/supplies')}>Products</p>
        <p onClick={() => navigate('/about')}>About</p>
        <p onClick={() => navigate('/contact')}>Contact</p>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src="/assets/instagram_icon.png" alt="Instagram" />
          <img src="/assets/pintester_icon.png" alt="Pinterest" />
          <img src="/assets/whatsapp_icon.png" alt="WhatsApp" />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright © 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
