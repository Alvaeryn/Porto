const mysql = require('mysql2/promise');

// Database connection configuration
let pool;

if (process.env.DATABASE_URL) {
  // For Aiven/Railway/etc with connection URL
  pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: true },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
} else {
  // For local development
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
}

// Initialize database and table
const initDatabase = async () => {
  try {
    // Create table - database already created by Aiven
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50),
        service VARCHAR(100),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Connected to MySQL database & contacts table ready');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

// Initialize on startup
initDatabase();

module.exports = pool;
