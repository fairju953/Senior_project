import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "college_supplies_store",
  port: process.env.DB_PORT || 3306, // Default MySQL port
});

// Check if the database is connected
connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed!");
    console.error("Error Code:", err.code);
    console.error("Error Message:", err.message);
  } else {
    console.log("✅ Connected to the MySQL database.");
  }
});

export default connection;
