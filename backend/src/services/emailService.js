const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send notification email to admin
exports.sendContactNotification = async (contactData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `Pesan Baru dari Portfolio - ${contactData.name}`,
      html: `
        <h2>Pesan Baru dari Portfolio</h2>
        <p><strong>Nama:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>WhatsApp:</strong> ${contactData.whatsapp || 'Tidak diisi'}</p>
        <p><strong>Layanan:</strong> ${contactData.service || 'Tidak diisi'}</p>
        <p><strong>Pesan:</strong></p>
        <p>${contactData.message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Notification email sent');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Send thank you email to user
exports.sendThankYouEmail = async (userEmail, userName) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Terima Kasih Telah Menghubungi Kami',
      html: `
        <h2>Halo ${userName},</h2>
        <p>Terima kasih telah menghubungi saya! Pesan Anda telah saya terima.</p>
        <p>Saya akan segera menghubungi Anda kembali secepatnya.</p>
        <p>Salam hangat,<br>Alvaeryn</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Thank you email sent');
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
};
