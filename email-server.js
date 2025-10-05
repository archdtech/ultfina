import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

const app = express();
const PORT = 3001; // Different port to avoid conflict with Vite

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept common file types
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'image/jpeg',
      'image/png'
    ];
    
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Please upload PDF, Word, or text files.'), false);
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Career application endpoint with file upload support
app.post('/api/send-career-email', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, formType, position, phone, linkedin, coverLetter, ...otherData } = req.body;
    const resumeFile = req.file;
    
    console.log('=== CAREER APPLICATION RECEIVED ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Position:', position);
    console.log('Form Type:', formType);
    console.log('Phone:', phone || 'Not provided');
    console.log('LinkedIn:', linkedin || 'Not provided');
    console.log('Cover Letter:', coverLetter || 'Not provided');
    console.log('Resume File:', resumeFile ? `${resumeFile.originalname} (${resumeFile.size} bytes)` : 'No file');
    console.log('Other Data:', otherData);
    console.log('================================');

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required' 
      });
    }

    // Create email content
    let subject = '';
    let emailContent = '';

    if (formType && formType.includes('Application')) {
      subject = `New ${formType}: ${name}`;
      emailContent = `
        <h2>New ${formType}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position || 'Not specified'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <h3>Cover Letter:</h3>
        <p>${coverLetter || 'No cover letter provided.'}</p>
        <h3>Resume:</h3>
        <p>${resumeFile ? `📎 ${resumeFile.originalname} (${(resumeFile.size / 1024).toFixed(1)} KB)` : 'No resume uploaded.'}</p>
      `;
    } else {
      subject = `New Career Application: ${name}`;
      emailContent = `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position || 'Not specified'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <h3>Cover Letter:</h3>
        <p>${coverLetter || 'No cover letter provided.'}</p>
        <h3>Resume:</h3>
        <p>${resumeFile ? `📎 ${resumeFile.originalname} (${(resumeFile.size / 1024).toFixed(1)} KB)` : 'No resume uploaded.'}</p>
      `;
    }

    // Prepare attachments array
    const attachments = [];
    if (resumeFile) {
      attachments.push({
        filename: resumeFile.originalname,
        content: resumeFile.buffer.toString('base64'),
        type: resumeFile.mimetype,
        disposition: 'attachment',
        content_id: resumeFile.originalname
      });
    }

    // Send email using Resend with attachments
    const emailData = {
      from: 'onboarding@resend.dev',
      to: [process.env.RESEND_TO_EMAIL || 'info@ultiro.se'],
      subject: subject,
      html: emailContent,
      replyTo: email,
      attachments: attachments
    };

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        message: 'Failed to send application', 
        error: error.message 
      });
    }

    console.log('Career application sent successfully:', data);
    res.status(200).json({ 
      message: 'Application submitted successfully! We will be in touch soon.',
      data: data
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message 
    });
  }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, formType, message, ...otherData } = req.body;
    
    console.log('=== EMAIL SUBMISSION RECEIVED ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Form Type:', formType);
    console.log('Message:', message);
    console.log('Message Length:', message?.length || 0);
    console.log('Other Data:', otherData);
    console.log('================================');

    // Create email content based on form type
    let subject = '';
    let emailContent = '';

    if (formType === 'Founder Application') {
      subject = `New Founder Application: ${name}`;
      emailContent = `
        <h2>New Founder Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${otherData.phone || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${otherData.linkedin || 'Not provided'}</p>
        <h3>Company & Scale Goals:</h3>
        <p>${message || 'No details provided about company and scale goals.'}</p>
      `;
    } else if (formType === 'Partner Application') {
      subject = `New Partner Application: ${name}`;
      emailContent = `
        <h2>New Partner Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${otherData.organizationName}</p>
        <p><strong>Website:</strong> ${otherData.website || 'Not provided'}</p>
        <p><strong>Organization Type:</strong> ${otherData.organizationType}</p>
        <p><strong>Focus Area:</strong> ${otherData.focusArea}</p>
        <p><strong>Job Title:</strong> ${otherData.jobTitle || 'Not provided'}</p>
        <h3>Partnership Goals:</h3>
        <p>${otherData.partnershipGoals}</p>
      `;
    } else {
      subject = `New Contact Form Submission: ${name}`;
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${otherData.subject || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `;
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.RESEND_TO_EMAIL || 'info@ultiro.se'],
      subject: subject,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        message: 'Failed to send email', 
        error: error.message 
      });
    }

    console.log('Email sent successfully:', data);
    res.status(200).json({ 
      message: 'Application submitted successfully! We will be in touch soon.',
      data: data
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      message: 'Internal server error', 
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Email server is running' });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Resend API Key configured: ${process.env.RESEND_API_KEY ? 'Yes' : 'No'}`);
  console.log(`Target email: ${process.env.RESEND_TO_EMAIL || 'info@ultiro.se'}`);
});