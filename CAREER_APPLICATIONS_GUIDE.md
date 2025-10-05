# Career Applications with File Upload - Complete Guide

## 🎯 Overview
All career application forms now support file uploads and send applications directly to `info@ultiro.se` with resume attachments.

## ✅ What's Implemented

### 📧 Email Functionality
- **File Upload Support**: Resume/CV files up to 10MB
- **Multiple File Types**: PDF, Word (.doc/.docx), Text files, Images
- **Direct Email Routing**: All applications go to `info@ultiro.se`
- **Professional Email Format**: HTML emails with all applicant details
- **File Attachments**: Resumes are attached to emails automatically

### 🏢 Career Positions Available
1. **CEO & Co-founder** - Paytack
2. **COO & Co-founder** - B2AND  
3. **Venture Builder** - Ultiro
4. **Senior Consultant** - Ultiro

### 📁 File Upload Features
- **Maximum File Size**: 10MB
- **Supported Formats**:
  - PDF (.pdf)
  - Microsoft Word (.doc, .docx)
  - Text files (.txt)
  - Images (.jpg, .jpeg, .png)
- **Validation**: Client-side and server-side validation
- **Security**: File type checking and size limits

## 🚀 How It Works

### Frontend (React Forms)
Each career form includes:
- Personal information fields (Name, Email, Phone)
- LinkedIn profile (optional)
- Cover letter text area
- **Resume/CV file upload** (required)
- Form validation
- Loading states and error handling

### Backend (Email Server)
- **New Endpoint**: `/api/send-career-email`
- **File Processing**: Multer middleware for file uploads
- **Email Generation**: Dynamic HTML content with applicant details
- **Attachments**: Base64 encoded files attached to emails
- **Error Handling**: Comprehensive error responses

### Email Content
Each email includes:
- Applicant name and contact information
- Position applied for
- Phone number and LinkedIn profile
- Cover letter text
- **Resume file attachment**
- Source page tracking

## 📧 Email Example

```
Subject: New CEO Co-founder Application: John Doe

New CEO Co-founder Application
Name: John Doe
Email: john@example.com
Position: CEO Co-founder
Phone: +1234567890
LinkedIn: https://linkedin.com/in/johndoe

Cover Letter:
Experienced executive with 10+ years in fintech...

Resume:
📎 john_doe_resume.pdf (245.7 KB)
```

## 🛠 Technical Implementation

### Dependencies Added
```json
{
  "multer": "^1.4.5-lts.1",
  "@types/multer": "^1.4.11"
}
```

### Key Files Modified
1. **`email-server.js`** - Added file upload endpoint
2. **`server-spa.js`** - Production server with file support
3. **Career Forms** - All 4 career application forms updated

### API Endpoints

#### Development
- `POST /api/send-career-email` (via Vite proxy to port 3001)

#### Production  
- `POST /api/send-career-email` (via SPA server on port 3000)

### Form Data Structure
```javascript
const formData = {
  name: 'Applicant Name',
  email: 'email@example.com',
  phone: '+1234567890',
  linkedin: 'https://linkedin.com/in/profile',
  coverLetter: 'Cover letter text...',
  formType: 'CEO Co-founder Application',
  position: 'CEO Co-founder',
  sourcePage: 'CEO-Cofounder Page',
  resume: File // Actual file object
}
```

## 🔧 Configuration

### Environment Variables
```bash
RESEND_API_KEY=re_c3nFxMAT_ct5cMzwjqyR7qT2eUMAiYx7D
RESEND_TO_EMAIL=info@ultiro.se
```

### File Upload Limits
- **Size**: 10MB maximum
- **Types**: PDF, DOC, DOCX, TXT, JPG, PNG
- **Validation**: Both client and server-side

## 📱 User Experience

### Application Flow
1. User fills out personal information
2. User uploads resume/CV (required)
3. User optionally adds LinkedIn and cover letter
4. Form validation ensures required fields
5. File upload shows progress and validation
6. Submission shows loading state
7. Success/error messages displayed

### Error Handling
- **File size errors**: "File too large. Maximum size is 10MB"
- **File type errors**: "Invalid file type. Please upload PDF, Word, or text files"
- **Validation errors**: "Please fill in all required fields"
- **Network errors**: "Failed to submit application. Please try again"

## 🎨 Form Features

### Input Fields
- **Name** (required)
- **Email** (required) 
- **Phone** (optional)
- **LinkedIn Profile** (optional)
- **Cover Letter** (optional, textarea)
- **Resume/CV** (required, file upload)

### UI Components
- File upload with drag-and-drop support
- File type and size validation
- Progress indicators
- Success/error states
- Form reset after successful submission

## 📊 Testing

### Manual Testing Checklist
- [ ] File upload works for all supported formats
- [ ] File size validation (test with >10MB file)
- [ ] File type validation (test with unsupported format)
- [ ] Form validation (required fields)
- [ ] Email delivery to info@ultiro.se
- [ ] Email attachments are accessible
- [ ] Error handling for network issues
- [ ] Success message displays correctly

### Test Files
Create test files to verify functionality:
- `test-resume.pdf` (under 10MB)
- `test-resume.txt` (text format)
- `large-file.pdf` (over 10MB - should fail)
- `invalid-file.exe` (unsupported type - should fail)

## 🚀 Deployment

### Development
```bash
npm run dev:full
```
- Vite dev server on port 3000
- Email server on port 3001
- File uploads work via proxy

### Production
```bash
npm run build
npm start
```
- Single server on port 3000
- Static files + API + file uploads
- SPA routing included

## 📧 Email Recipients

All career applications are sent to:
- **Primary**: `info@ultiro.se`
- **Reply-to**: Applicant's email address
- **From**: `onboarding@resend.dev`

## 🔍 Monitoring

### Server Logs
The email server logs:
- Application received details
- File information (name, size, type)
- Email send status
- Any errors encountered

### Example Log Output
```
=== CAREER APPLICATION RECEIVED ===
Name: John Doe
Email: john@example.com
Position: CEO Co-founder
Form Type: CEO Co-founder Application
Phone: +1234567890
LinkedIn: https://linkedin.com/in/johndoe
Cover Letter: Experienced executive...
Resume File: john_doe_resume.pdf (251732 bytes)
================================
Career application sent successfully: {id: "email_id"}
```

## 🎉 Benefits

1. **Professional Application Process**: Complete career application system
2. **File Management**: Secure file upload with validation
3. **Email Integration**: Automatic email delivery with attachments
4. **User Experience**: Smooth, intuitive application forms
5. **Scalable**: Easy to add new career positions
6. **Trackable**: Source page and form type tracking
7. **Mobile Friendly**: Responsive design for all devices

## 📞 Support

For any issues with the career application system:
- Check server logs for error details
- Verify Resend API key is valid
- Ensure file uploads are under 10MB
- Confirm supported file formats

The career application system is now fully functional with file upload support! 🚀