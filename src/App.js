import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CountdownBanner from './Components/CountdownBanner/CountdownBanner.jsx';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/LoginSignup.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Success from './Pages/Success.jsx';
import Checkout from './Pages/Checkout.jsx'; // ✅ Add this import

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {!isHomePage && <CountdownBanner />}
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Shop />} />
          <Route path="/textbooks" element={<ShopCategory banner="/assets/banner_textbooks.png" category="textbooks" />} />
          <Route path="/electronics" element={<ShopCategory banner="/assets/banner_electronics.png" category="electronics" />} />
          <Route path="/supplies" element={<ShopCategory banner="/assets/banner_supplies.png" category="supplies" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ Add this line */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
