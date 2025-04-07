import './App.css';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CountdownBanner from './Components/CountdownBanner/CountdownBanner.jsx';

import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';

// Reusable layout with conditionally hidden banner
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
          <Route path='/' element={<Shop />} />
          <Route path='/textbooks' element={<ShopCategory banner="/assets/banner_textbooks.png" category="textbooks" />} />
          <Route path='/electronics' element={<ShopCategory banner="/assets/banner_electronics.png" category="electronics" />} />
          <Route path='/supplies' element={<ShopCategory banner="/assets/banner_supplies.png" category="supplies" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
