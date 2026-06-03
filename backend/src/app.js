require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/database'); // Initialize database
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    status: 'success',
    author: 'Alvaeryn'
  });
});

// API Routes example
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Contact Routes
app.use('/api/contact', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
