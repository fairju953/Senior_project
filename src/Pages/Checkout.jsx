import React, { useContext, useState } from 'react';
import './Checkout.css';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { all_product, cartItems, setCartItems } = useContext(ShopContext) || {};
  const [shipping, setShipping] = useState(5.99);
  const [form, setForm] = useState({ name: '', address: '', email: '' });
  const navigate = useNavigate();
  const taxRate = 0.06625;

  const cartDetails = all_product?.filter(item => cartItems?.[item.id] > 0) || [];
  const subtotal = cartDetails.reduce((acc, item) => acc + item.new_price * cartItems[item.id], 0);
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax + shipping;

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!form.name || !form.address || !form.email) {
      alert('Please fill in all the fields.');
      return;
    }

    const orderNumber = 'STUDY' + Math.floor(100000 + Math.random() * 900000);
    alert(`✅ Order placed successfully!\nOrder Number: ${orderNumber}`);

    if (setCartItems) {
      const clearedCart = Object.keys(cartItems).reduce((acc, id) => {
        acc[id] = 0;
        return acc;
      }, {});
      setCartItems(clearedCart);
    }

    setTimeout(() => navigate('/'), 800);
  };

  return (
    <div className="checkout-container">
      <h2>Order Summary</h2>

      {cartDetails.map((item) => (
        <div key={item.id} className="checkout-item">
          <img src={`/assets/${item.image}`} alt={item.name} />
          <div className="checkout-details">
            <h3>{item.name}</h3>
            <p>Quantity: {cartItems[item.id]}</p>
            <p>Total: ${(item.new_price * cartItems[item.id]).toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div className="shipping-options">
        <h4>Shipping Options:</h4>
        <label>
          <input type="radio" name="shipping" checked={shipping === 5.99} onChange={() => setShipping(5.99)} />
          Standard (4–6 days) – $5.99
        </label>
        <label>
          <input type="radio" name="shipping" checked={shipping === 14.99} onChange={() => setShipping(14.99)} />
          Express (2–3 days) – $14.99
        </label>
        <label>
          <input type="radio" name="shipping" checked={shipping === 24.99} onChange={() => setShipping(24.99)} />
          Overnight (1 day) – $24.99
        </label>
      </div>

      <div className="checkout-form">
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Shipping Address" value={form.address} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleInputChange} />
      </div>

      <div className="checkout-summary">
        <div className="row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="row">
          <span>NJ Sales Tax (6.625%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="row">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="row total">
          <span>Grand Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>

        <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
