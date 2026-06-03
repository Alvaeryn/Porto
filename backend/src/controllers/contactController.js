const db = require('../config/database');
const emailService = require('../services/emailService');

// Submit contact form
exports.submitContact = async (req, res) => {
  try {
    const { name, email, whatsapp, service, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Nama, email, dan pesan harus diisi!'
      });
    }

    // Save to database
    const [result] = await db.execute(
      'INSERT INTO contacts (name, email, whatsapp, service, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, whatsapp || '', service || '', message]
    );

    console.log('Contact saved to database:', { id: result.insertId, name, email });

    // Send emails (non-blocking)
    try {
      await emailService.sendContactNotification({ name, email, whatsapp, service, message });
      await emailService.sendThankYouEmail(email, name);
      console.log('Emails sent successfully!');
    } catch (emailError) {
      console.error('Error sending emails (continuing anyway):', emailError.message);
    }

    res.status(201).json({
      status: 'success',
      message: 'Pesan kamu berhasil dikirim! Saya akan segera menghubungi kamu.',
      data: { id: result.insertId, name, email, whatsapp, service }
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan pada server'
    });
  }
};

// Get all contacts (for admin)
exports.getAllContacts = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json({
      status: 'success',
      data: rows
    });
  } catch (error) {
    console.error('Error getting contacts:', error);
    res.status(500).json({
      status: 'error',
      message: 'Terjadi kesalahan pada server'
    });
  }
};
