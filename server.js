const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lake123!', // your actual password
  database: 'ecommerce'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL!');
});

// 🛍️ Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 📉 Subtract stock when adding to cart
app.post('/api/update-stock', (req, res) => {
  const { id, quantity } = req.body;
  const sql = 'UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?';
  db.query(sql, [quantity, id, quantity], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: result.affectedRows > 0 });
  });
});

// 📈 Add stock when removing from cart
app.post('/api/increase-stock', (req, res) => {
  const { id, quantity } = req.body;
  const sql = 'UPDATE products SET stock = stock + ? WHERE id = ?';
  db.query(sql, [quantity, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: result.affectedRows > 0 });
  });
});

// ⭐ Get reviews for a specific product
app.get('/api/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  const sql = 'SELECT reviewer_name, rating, review_text FROM reviews WHERE product_id = ?';
  db.query(sql, [productId], (err, results) => {
    if (err) {
      console.error('Error fetching reviews:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(Array.isArray(results) ? results : []);
  });
});

// 🆕 Register new user
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, userId: result.insertId });
  });
});

// 🔐 Login user
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false });
    }
  });
});

// 🚀 Start the server
app.listen(3001, () => {
  console.log('🚀 Backend running on http://localhost:3001');
});
