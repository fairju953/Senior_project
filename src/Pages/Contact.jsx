import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📝 Message submitted! Thank you.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Kean University</h3>
          <p>1000 Morris Ave<br />Union, NJ 07083</p>
          <img
                src="/assets/kean_map.png"
                alt="Kean University Map"
                style={{ maxWidth: '300px', borderRadius: '10px' }}
        />
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Your message..." value={form.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
