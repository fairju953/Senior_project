import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={() => setMenu("home")}>
          <img src="/assets/logo.png" alt="StudyStock Logo" className="navbar-logo" />
          <p className="nav-brand">StudyStock</p>
        </Link>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("textbooks")}>
          <Link style={{ textDecoration: 'none' }} to='/textbooks'>Textbooks</Link>
          {menu === "textbooks" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("electronics")}>
          <Link style={{ textDecoration: 'none' }} to='/electronics'>Electronics</Link>
          {menu === "electronics" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("supplies")}>
          <Link style={{ textDecoration: 'none' }} to='/supplies'>Supplies</Link>
          {menu === "supplies" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-auth-cart">
        <div className="nav-auth">
          <Link to='/login'><button className="nav-btn">Login</button></Link>
          <Link to='/signup'><button className="nav-btn">Sign Up</button></Link>
        </div>
        <div className="nav-cart">
          <Link to='/cart' className="nav-cart-icon">
            <img src="/assets/cart_icon.png" alt="Cart" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
