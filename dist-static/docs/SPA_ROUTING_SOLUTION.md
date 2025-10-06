# SPA Routing Solution - Fixed 404 Issues

## Problem
Direct access to subpages (like `/apply-founder`, `/portfolio`, etc.) returned 404 errors, while navigation from the main page worked correctly.

## Root Cause
This is a classic Single Page Application (SPA) routing issue. When users navigate directly to a URL like `yoursite.com/apply-founder`, the server tries to find that exact file/directory, which doesn't exist. The routing should be handled client-side by React Router.

## Solution Implemented

### 1. Production Server (`server-spa.js`)
Created a unified server that:
- Serves static files from `dist/` directory
- Handles API endpoints (`/api/*`)
- **Fallback route**: Serves `index.html` for all non-API routes, allowing React Router to handle the routing

### 2. Deployment Configuration Files
Created platform-specific routing configurations:

#### Netlify (`public/_redirects`)
```
/*    /index.html   200
```

#### Apache (`public/.htaccess`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Updated Package Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "start": "node server-spa.js",
    "preview": "vite preview"
  }
}
```

## How to Deploy

### Option 1: Custom Server (Recommended for full control)
```bash
npm run build
npm start
```

### Option 2: Netlify
1. Run `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Netlify will automatically use the `_redirects` file

### Option 3: Vercel
1. Run `npm run build`
2. Deploy the `dist/` folder to Vercel
3. Vercel will automatically use the `vercel.json` configuration

### Option 4: Apache Server
1. Run `npm run build`
2. Copy `dist/` contents to your web server
3. Ensure `.htaccess` is copied to the web root

### Option 5: Nginx Server
Add this to your Nginx configuration:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}

location /api/ {
    proxy_pass http://localhost:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

## Development vs Production

### Development (Current Setup)
- Vite dev server handles SPA routing automatically
- Email server runs separately on port 3001
- Use: `npm run dev:full`

### Production (New Setup)
- Single server handles both static files and API
- SPA routing built-in
- Use: `npm run build && npm start`

## Testing

The solution has been tested with:
- ✅ Direct access to `/apply-founder`
- ✅ Direct access to `/portfolio`
- ✅ Direct access to nested routes like `/programs/nordic-scale-program`
- ✅ Email functionality through API
- ✅ Navigation from main page still works

## All Available Routes

### Main Pages
- `/` - Home
- `/about` - About Us
- `/contact` - Contact
- `/scale` - Scale Program
- `/studio` - Studio
- `/programs` - Programs
- `/portfolio` - Portfolio
- `/insights` - Insights
- `/careers` - Careers

### Application Forms
- `/apply-founder` - Founder Application
- `/apply-partner` - Partner Application

### Sub-pages
- `/programs/nordic-scale-program`
- `/programs/global-competence-program`
- `/programs/trade-promotion-program`
- `/portfolio/nobon`
- `/portfolio/paytota`
- `/portfolio/paytack`
- `/portfolio/b2and`
- `/portfolio/pricetify`
- `/insights/nordic-scaling-guide`
- `/insights/co-ownership-success`
- `/careers/ceo-cofounder`
- `/careers/coo-cofounder`
- `/careers/venture-builder`
- `/careers/senior-consultant`

### Utility Pages
- `/sitemap` - Sitemap
- `/design-system` - Design System
- `/contact-test` - Contact Test

## Benefits

1. **SEO Friendly**: All pages are accessible via direct URLs
2. **User Experience**: Users can bookmark and share specific pages
3. **Development**: Hot reload still works in development
4. **Production**: Single server deployment
5. **Email**: Integrated email functionality
6. **Platform Agnostic**: Works with any hosting provider

## Migration Steps

1. **For immediate fix**: Use the new `server-spa.js` for production
2. **For platform deployment**: Use the appropriate configuration file
3. **For development**: Continue using current setup (`npm run dev:full`)

The 404 issue is now completely resolved! 🎉