// src/Components/Layout.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CountdownBanner from './CountdownBanner/CountdownBanner';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <Navbar />
      {!isHome && <CountdownBanner />}
      {children}
      <Footer />
      <Chatbot />
    </>
  );
};

export default Layout;
