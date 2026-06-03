const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact - Kirim pesan
router.post('/', contactController.submitContact);

// GET /api/contact - Ambil semua pesan (untuk admin)
router.get('/', contactController.getAllContacts);

module.exports = router;
