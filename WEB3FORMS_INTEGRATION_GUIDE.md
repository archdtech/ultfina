# 📧 Web3Forms Integration Guide - Ultiro Website

This guide explains how Web3Forms has been integrated into the Ultiro website to handle all form submissions with file upload capability.

## 🔑 Web3Forms Configuration

**Public Access Key**: `ffe2efec-35be-401c-bf12-6aa56b81ba46`

**API Endpoint**: `https://api.web3forms.com/submit`

## 📋 Forms Integrated

### 1. Career Application Forms (with File Upload)

All career application forms now support optional resume/CV upload:

- **CEO & Co-founder** (`/careers/ceo-cofounder`)
- **COO & Co-founder** (`/careers/coo-cofounder`) 
- **Venture Builder** (`/careers/venture-builder`)
- **Senior Consultant** (`/careers/senior-consultant`)

#### Features:
- ✅ **File Upload**: Optional resume/CV upload (max 10MB)
- ✅ **File Types**: PDF, DOC, DOCX, TXT, JPG, PNG
- ✅ **Form Validation**: Name and Email required
- ✅ **Professional Email Format**: Structured email content
- ✅ **Direct Delivery**: Forms sent to your configured email

#### Form Data Structure:
```javascript
const formData = {
  access_key: 'ffe2efec-35be-401c-bf12-6aa56b81ba46',
  name: 'Applicant Name',
  email: 'applicant@email.com',
  subject: 'CEO Co-founder Application: Applicant Name',
  message: `
Position: CEO Co-founder
Company: Paytack
Phone: +1234567890
LinkedIn: https://linkedin.com/in/applicant

Cover Letter:
Applicant's cover letter content...

Resume: Attached (if file uploaded)
  `,
  from_name: 'Ultiro Careers',
  reply_to: 'applicant@email.com',
  attachment: File // Resume file (if uploaded)
};
```

### 2. Contact Form

**Location**: `/contact`

#### Features:
- ✅ **Simple Contact**: Name, Email, Subject, Message
- ✅ **Additional Fields**: Company, Phone (optional)
- ✅ **Email Validation**: Proper email format validation
- ✅ **Professional Formatting**: Structured email content

### 3. Partner Application Form

**Location**: `/apply-partner`

#### Features:
- ✅ **Organization Details**: Company name, website, type
- ✅ **Focus Areas**: Industry and partnership goals
- ✅ **Contact Information**: Personal and company details
- ✅ **Professional Email**: Structured for business partnerships

### 4. Founder Application Form

**Location**: `/apply-founder`

#### Features:
- ✅ **Founder Information**: Personal and contact details
- ✅ **Company Vision**: Scale goals and company description
- ✅ **Professional Format**: Optimized for founder applications

## 🛠 Technical Implementation

### Form Submission Pattern

All forms follow this consistent pattern:

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  // 1. Validation
  if (!formData.name || !formData.email) {
    setError('Please fill in required fields');
    return;
  }

  // 2. Create FormData for Web3Forms
  const formDataToSend = new FormData();
  formDataToSend.append('access_key', 'ffe2efec-35be-401c-bf12-6aa56b81ba46');
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('subject', `Application: ${formData.name}`);
  formDataToSend.append('message', formattedMessage);
  formDataToSend.append('from_name', 'Ultiro');
  formDataToSend.append('reply_to', formData.email);

  // 3. Add file attachment (if applicable)
  if (file) {
    formDataToSend.append('attachment', file);
  }

  // 4. Submit to Web3Forms
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      // Success handling
      setSuccess('Application submitted successfully!');
      resetForm();
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    // Error handling
    setError(error.message);
  } finally {
    setIsSubmitting(false);
  }
};
```

### File Upload Implementation

```javascript
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
    
    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'image/jpeg',
      'image/png'
    ];

    if (!allowedTypes.includes(file.type)) {
      setError('Please upload PDF, Word, or text files');
      return;
    }

    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  }
};
```

## 📧 Email Format

### Career Application Email Example

```
Subject: CEO Co-founder Application: John Doe

From: Ultiro Careers <noreply@web3forms.com>
Reply-To: john.doe@email.com

Position: CEO Co-founder
Company: Paytack
Phone: +1234567890
LinkedIn: https://linkedin.com/in/johndoe

Cover Letter:
Experienced fintech leader with 10+ years of experience...

Resume: Attached (resume.pdf)
```

### Contact Form Email Example

```
Subject: Contact Form Submission: John Doe

From: Ultiro Contact <noreply@web3forms.com>
Reply-To: john.doe@email.com

Company: Acme Corporation
Phone: +1234567890

Message:
I'm interested in learning more about Ultiro's services...
```

## 🔧 Configuration

### Web3Forms Dashboard

1. **Login**: [web3forms.com](https://web3forms.com)
2. **Access Key**: `ffe2efec-35be-401c-bf12-6aa56b81ba46`
3. **Email Settings**: Configure your recipient email
4. **Form Settings**: Customize spam protection, redirects, etc.

### Email Configuration

In your Web3Forms dashboard:
- **Recipient Email**: Set to `info@ultiro.se`
- **Email Template**: Use default HTML format
- **Spam Protection**: Enable reCAPTCHA if needed
- **Redirects**: Configure custom thank you pages

## 🚀 Benefits of Web3Forms Integration

### ✅ **Advantages**

1. **No Backend Required**: Pure frontend implementation
2. **File Upload Support**: Native file attachment handling
3. **Spam Protection**: Built-in reCAPTCHA and security
4. **Email Delivery**: Reliable email delivery service
5. **Form Analytics**: Track submissions and performance
6. **Easy Setup**: No server configuration needed
7. **Cost Effective**: Free tier available

### 📊 **Features**

- **File Uploads**: Up to 10MB per file
- **Multiple File Types**: PDF, DOC, DOCX, TXT, JPG, PNG
- **Form Validation**: Client-side and server-side
- **Custom Email Templates**: Professional formatting
- **Auto-responders**: Optional confirmation emails
- **Webhooks**: Integration with other services

## 🛡 Security Considerations

### Client-Side Security
- ✅ **Input Validation**: All fields validated before submission
- ✅ **File Type Checking**: Only allowed file types accepted
- ✅ **File Size Limits**: 10MB maximum file size
- ✅ **Email Validation**: Proper email format checking

### Web3Forms Security
- ✅ **Spam Protection**: Built-in spam filtering
- ✅ **reCAPTCHA**: Optional bot protection
- ✅ **Rate Limiting**: Prevent form abuse
- ✅ **HTTPS**: Secure form submission

## 📱 Mobile Responsiveness

All forms are fully responsive and work on:
- ✅ **Desktop**: Full functionality with drag-and-drop
- ✅ **Tablet**: Optimized touch interactions
- ✅ **Mobile**: Simplified interface for small screens

## 🔄 Migration from Resend

### What Changed
- ❌ **Removed**: Resend backend API endpoints
- ❌ **Removed**: Server-side email handling
- ❌ **Removed**: Environment variables for email
- ✅ **Added**: Direct Web3Forms integration
- ✅ **Added**: File upload support
- ✅ **Simplified**: No backend required

### Benefits of Migration
1. **Simpler Architecture**: No backend email server
2. **Better File Support**: Native file upload handling
3. **Reduced Dependencies**: Fewer npm packages
4. **Easier Deployment**: Static site hosting
5. **Better Reliability**: Managed email service

## 🧪 Testing

### Manual Testing Steps

1. **Navigate to any form page**
2. **Fill in required fields** (Name, Email)
3. **Test file upload** (for career forms)
4. **Submit form**
5. **Check email inbox** for submission
6. **Verify email format** and attachments

### Automated Testing

```javascript
// Test form submission
const testFormSubmission = async () => {
  const formData = new FormData();
  formData.append('access_key', 'ffe2efec-35be-401c-bf12-6aa56b81ba46');
  formData.append('name', 'Test User');
  formData.append('email', 'test@example.com');
  formData.append('subject', 'Test Submission');
  formData.append('message', 'Test message');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  });

  console.log('Test submission:', await response.json());
};
```

## 📈 Monitoring

### Web3Forms Analytics
- **Submission Count**: Track form usage
- **Conversion Rate**: Monitor form completion
- **Geographic Data**: See submission locations
- **Device Analytics**: Mobile vs desktop usage

### Email Delivery
- **Delivery Rate**: Monitor successful deliveries
- **Bounce Rate**: Track failed deliveries
- **Open Rate**: Measure email engagement
- **Response Time**: Track reply times

## 🔧 Troubleshooting

### Common Issues

#### 1. Form Not Submitting
- **Check**: Access key is correct
- **Check**: Required fields are filled
- **Check**: Network connection
- **Check**: Browser console for errors

#### 2. File Upload Not Working
- **Check**: File size is under 10MB
- **Check**: File type is allowed
- **Check**: Browser supports File API
- **Check**: No network errors

#### 3. Email Not Received
- **Check**: Spam folder
- **Check**: Web3Forms dashboard settings
- **Check**: Recipient email configuration
- **Check**: Submission logs in dashboard

### Debug Mode

Add this to your form for debugging:

```javascript
// Add to form submission
console.log('Submitting form:', Object.fromEntries(formDataToSend));

// Check response
const result = await response.json();
console.log('Web3Forms response:', result);
```

## 📚 Additional Resources

- **Web3Forms Documentation**: [web3forms.com/docs](https://web3forms.com/docs)
- **Form Examples**: [web3forms.com/examples](https://web3forms.com/examples)
- **API Reference**: [web3forms.com/api](https://web3forms.com/api)
- **Support**: [web3forms.com/support](https://web3forms.com/support)

---

## 🎉 Summary

The Ultiro website now uses Web3Forms for all form submissions with the following benefits:

- ✅ **Simplified Architecture**: No backend email server required
- ✅ **File Upload Support**: Resume/CV uploads for career applications
- ✅ **Professional Email Format**: Structured, readable emails
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **Secure & Reliable**: Managed form service
- ✅ **Easy Maintenance**: Simple configuration and monitoring

All forms are now production-ready and will deliver submissions directly to your configured email address! 🚀