import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Static Site Generation Configuration
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Static pages
        main: resolve(__dirname, 'index.html'),
        'international-investors': resolve(__dirname, 'pages/international-investors.html'),
        'tech-investment': resolve(__dirname, 'pages/tech-investment.html'),
        'sustainable-investment': resolve(__dirname, 'pages/sustainable-investment.html'),
        'lifestyle-investment': resolve(__dirname, 'pages/lifestyle-investment.html'),
        'nordic-gateway': resolve(__dirname, 'pages/nordic-gateway.html'),
        'about': resolve(__dirname, 'pages/about.html'),
        'contact': resolve(__dirname, 'pages/contact.html'),
        'careers': resolve(__dirname, 'pages/careers.html'),
        'insights': resolve(__dirname, 'pages/insights.html'),
        'portfolio': resolve(__dirname, 'pages/portfolio.html'),
        'programs': resolve(__dirname, 'pages/programs.html'),
        'scale': resolve(__dirname, 'pages/scale.html'),
      },
    },
    outDir: 'dist-static',
    emptyOutDir: true,
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.API_BASE_URL': '"https://your-api-server.com"',
  },
});