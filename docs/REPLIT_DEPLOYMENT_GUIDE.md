# 🚀 Replit Deployment Guide - Ultiro Website

This guide will help you deploy the Ultiro website with career application functionality on Replit.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Environment Configuration](#environment-configuration)
4. [Running the Application](#running-the-application)
5. [Deployment to Replit Hosting](#deployment-to-replit-hosting)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Testing Your Deployment](#testing-your-deployment)
8. [Troubleshooting](#troubleshooting)

## 🎯 Prerequisites

- Replit account (free or paid)
- Resend API key (for email functionality)
- All project files already uploaded to Replit

## 🛠 Project Setup

### 1. Verify Project Structure

Make sure your Replit contains these key files:
```
/home/z/my-project/
├── package.json
├── server-spa.js
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── pages/
│       ├── careers/
│       ├── portfolio/
│       └── ...
├── public/
├── dist/ (created after build)
└── .replit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build the Project

```bash
npm run build
```

## 🔐 Environment Configuration

### 1. Set Up Replit Secrets

Go to **Secrets** (lock icon 🔒 in the left sidebar) and add:

```env
RESEND_API_KEY=your_actual_resend_api_key_here
RESEND_TO_EMAIL=info@ultiro.se
NODE_ENV=production
```

### 2. Get Resend API Key

1. Visit [resend.com](https://resend.com)
2. Sign up for an account
3. Go to API Keys section
4. Create a new API key
5. Copy the key and add it to Replit Secrets

### 3. Verify Configuration

Create a `.env.example` file for reference:

```env
# Email Configuration (Required)
RESEND_API_KEY=your_resend_api_key_here
RESEND_TO_EMAIL=info@ultiro.se

# Optional: Custom email from address
FROM_EMAIL=onboarding@resend.dev

# Environment
NODE_ENV=production
```

## 🏃 Running the Application

### Development Mode

For development with hot reload:

```bash
npm run dev:full
```

This runs both the Vite dev server and the email server concurrently.

### Production Mode

For production deployment:

```bash
npm run build
npm start
```

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run email-server` - Start email server only
- `npm run dev:full` - Start both dev and email servers

## 🌐 Deployment to Replit Hosting

### 1. Configure Replit Settings

Make sure your `.replit` file contains:

```toml
entrypoint = "server-spa.js"
modules = ["nodejs-18:latest"]

[deployment]
run = ["npm", "start"]
build = ["npm", "run", "build"]

[deployment.target]
kind = "Nodejs"
runCommand = "npm start"
```

### 2. Deploy Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Click the "Deploy" button** at the top of your Replit

3. **Choose deployment type**:
   - Select "Publish to hosting"
   - Choose "Node.js" as the environment
   - The system will automatically use your `.replit` configuration

4. **Wait for deployment**:
   - Replit will build and deploy your application
   - You'll see a deployment URL when complete

### 3. Access Your Site

Your deployed site will be available at:
- **Replit URL**: `https://your-replit-name.replit.app`
- **Direct link**: Provided in the deployment confirmation

## 🌍 Custom Domain Setup (Optional)

### 1. Configure Domain in Replit

1. Go to your Replit's **Hosting settings**
2. Click "Add custom domain"
3. Enter your domain name (e.g., `ultiro.se`)
4. Click "Add domain"

### 2. Update DNS Settings

Replit will provide you with DNS records. Add these to your domain registrar:

```
Type: CNAME
Name: @ (or your subdomain)
Value: replit.app
```

### 3. Verify Domain

Wait for DNS propagation (usually 5-30 minutes) and verify in Replit.

## 🧪 Testing Your Deployment

### 1. Basic Functionality Tests

Open your deployed site and test:

- ✅ Homepage loads correctly
- ✅ Navigation between pages works
- ✅ All career application pages are accessible
- ✅ Contact forms are functional

### 2. Email Functionality Tests

Test the email features:

1. **Career Application Form**:
   - Fill out a job application form
   - Test with and without resume upload
   - Check if email is received at `info@ultiro.se`

2. **Contact Form**:
   - Fill out the contact form
   - Verify email delivery

### 3. File Upload Tests

Test resume upload functionality:

- ✅ Upload PDF files
- ✅ Upload Word documents
- ✅ Upload images (JPG, PNG)
- ✅ Test file size limit (10MB)
- ✅ Test without file upload (optional)

### 4. API Endpoint Tests

Test the API endpoints directly:

```bash
# Health check
curl https://your-replit-name.replit.app/api/health

# Should return: {"status":"OK","message":"Server is running"}
```

## 🚨 Troubleshooting

### Common Issues and Solutions

#### 1. Server Won't Start

**Problem**: Server fails to start
**Solution**: 
- Check if all dependencies are installed: `npm install`
- Verify Node.js version (should be 18+)
- Check server logs for specific errors

#### 2. Email Not Working

**Problem**: Forms submit but no emails received
**Solution**:
- Verify `RESEND_API_KEY` is correctly set in Secrets
- Check if `RESEND_TO_EMAIL` is set to `info@ultiro.se`
- Ensure API key is active and has sufficient credits

#### 3. File Upload Fails

**Problem**: Resume upload doesn't work
**Solution**:
- Check file size (max 10MB)
- Verify file type (PDF, DOC, DOCX, TXT, JPG, PNG)
- Check server logs for upload errors

#### 4. Pages Not Found (404)

**Problem**: Some pages return 404 errors
**Solution**:
- Ensure the build was successful: `npm run build`
- Check if `dist/` folder exists and contains `index.html`
- Verify SPA routing is working in `server-spa.js`

#### 5. CORS Issues

**Problem**: API calls blocked by CORS
**Solution**:
- Verify CORS middleware is configured in `server-spa.js`
- Check if API endpoints are correctly prefixed with `/api/`

### Debug Mode

To enable debug logging, add this to your Secrets:

```env
DEBUG=ultiro:*
```

### Performance Optimization

For better performance:

1. **Enable caching** in your server configuration
2. **Optimize images** before uploading
3. **Monitor file sizes** to stay within Replit limits
4. **Use CDN** for static assets if needed

## 📊 Monitoring Your Site

### 1. Server Logs

Monitor your server logs in Replit:
- Click the "Logs" tab in your Replit
- Watch for errors or unusual activity
- Check email delivery logs

### 2. Uptime Monitoring

Consider using uptime monitoring services:
- Uptime Robot
- Pingdom
- StatusCake

### 3. Email Analytics

Monitor email performance through Resend dashboard:
- Delivery rates
- Open rates
- Bounce rates
- API usage

## 🔄 Maintenance

### Regular Tasks

1. **Update dependencies**:
   ```bash
   npm update
   ```

2. **Check email credits** in Resend dashboard

3. **Monitor storage usage** in Replit

4. **Backup important files** regularly

### Security Considerations

- Keep API keys secure in Replit Secrets
- Regularly update dependencies
- Monitor for suspicious activity
- Implement rate limiting if needed

## 📞 Support

If you encounter issues:

1. **Check Replit documentation**: docs.replit.com
2. **Review Resend documentation**: resend.com/docs
3. **Check server logs** in Replit
4. **Test locally** before deploying

## 🎉 Success Criteria

Your deployment is successful when:

- ✅ Homepage loads at your domain
- ✅ All navigation works smoothly
- ✅ Career application forms submit successfully
- ✅ Resume uploads work (optional)
- ✅ Emails are received at `info@ultiro.se`
- ✅ Site is responsive on mobile devices
- ✅ All pages load without errors

---

**🚀 Your Ultiro website is now ready for production on Replit!**

For additional support or questions, refer to the project documentation or create an issue in the GitHub repository.