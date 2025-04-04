import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu,setMenu] = useState ("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("textbooks")}}> <Link style={{ textDecoration: 'none' }} to='/textbooks'>Textbooks</Link> {menu==="textbooks"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("electronics")}}><Link style={{ textDecoration: 'none' }} to='/electronics'>Electronics</Link> {menu==="electronics"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("supplies")}}> <Link style={{ textDecoration: 'none' }} to='/supplies'>Supplies</Link> {menu==="supplies"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar

