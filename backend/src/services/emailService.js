const { Resend } = require('resend');

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Send notification email to admin
exports.sendContactNotification = async (contactData) => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'vaerann@gmail.com';
    
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: adminEmail,
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
    });
    
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
    await resend.emails.send({
      from: 'Alvaeryn Portfolio <onboarding@resend.dev>',
      to: userEmail,
      subject: 'Terima Kasih Telah Menghubungi Kami',
      html: `
        <h2>Halo ${userName},</h2>
        <p>Terima kasih telah menghubungi saya! Pesan Anda telah saya terima.</p>
        <p>Saya akan segera menghubungi Anda kembali secepatnya.</p>
        <p>Salam hangat,<br>Alvaeryn</p>
      `
    });
    
    console.log('Thank you email sent');
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
};
