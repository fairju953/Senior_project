import "dotenv/config"; // Loads environment variables from a .env file
import express from "express";
import db from "./db.js"; // Import the database connection
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Ensure process is defined

app.use(express.json()); // Middleware to parse JSON requests

app.get("/api/products", async (req, res) => {
  try {
    const query = `
      SELECT p.product_id, p.product_name, p.price, c.category_name 
      FROM products p
      JOIN categories c ON p.category_id = c.category_id
    `;

    db.query(query, (err, results) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ error: "Failed to fetch products", details: err.message });
      }
      res.json(results);
    });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
