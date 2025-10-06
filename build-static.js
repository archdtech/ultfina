#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static pages configuration
const staticPages = [
  {
    name: 'International Investors',
    route: 'international-investors',
    component: 'InternationalInvestors',
    title: 'International Market Entry Investment | Ultiro',
    description: 'Your gateway to Scandinavian market success. 90-day market entry, 35% ROI, regulatory navigation for international investors.'
  },
  {
    name: 'Tech Investment Hub',
    route: 'tech-investment',
    component: 'TechInvestmentHub',
    title: 'Nordic Tech Investment Hub | Ultiro',
    description: 'Connecting global innovation to Scandinavian excellence. Access €7B+ tech ecosystem, 200+ VCs, Stockholm tech corridor.'
  },
  {
    name: 'Sustainable Investment',
    route: 'sustainable-investment',
    component: 'SustainableInvestment',
    title: 'Sustainable Investment Sweden | Ultiro',
    description: 'Leading the global green transition. #1 sustainability ranking, €1.5B green funding, carbon-neutral advantages.'
  },
  {
    name: 'Lifestyle Investment',
    route: 'lifestyle-investment',
    component: 'LifestyleInvestment',
    title: 'Lifestyle Investment Sweden | Ultiro',
    description: 'Where quality of life meets quality investment. #1 livability index, work-life balance, family benefits.'
  },
  {
    name: 'Strategic Nordic Gateway',
    route: 'nordic-gateway',
    component: 'StrategicNordicGateway',
    title: 'Strategic Nordic Gateway | Ultiro',
    description: 'Your complete Scandinavian market access solution. 27M consumers, 5-country entry, unified market strategy.'
  }
];

// Create HTML templates for static pages
function createStaticHTML(page) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title}</title>
    <meta name="description" content="${page.description}">
    <meta name="keywords" content="Nordic investment, Sweden market entry, Scandinavian expansion, Ultiro">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ultiro.se/${page.route}">
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:image" content="https://ultiro.se/images/ultirov1.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://ultiro.se/${page.route}">
    <meta property="twitter:title" content="${page.title}">
    <meta property="twitter:description" content="${page.description}">
    <meta property="twitter:image" content="https://ultiro.se/images/ultirov1.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom Styles -->
    <style>
        .fade-in {
            animation: fadeIn 0.6s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
    </style>
    
    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Ultiro",
        "description": "${page.description}",
        "url": "https://ultiro.se/${page.route}",
        "logo": "https://ultiro.se/logo.svg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Grev Turegatan 16",
            "addressLocality": "Stockholm",
            "addressRegion": "Stockholm",
            "postalCode": "114 46",
            "addressCountry": "SE"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+46-8-123-456",
            "contactType": "customer service"
        }
    }
    </script>
</head>
<body class="bg-white text-gray-900">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="/" class="flex items-center space-x-2">
                        <img src="/logo.svg" alt="Ultiro" class="h-8 w-auto">
                        <span class="text-xl font-bold text-gray-900">Ultiro</span>
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="/international-investors" class="text-gray-600 hover:text-blue-600 transition-colors">International Investors</a>
                    <a href="/tech-investment" class="text-gray-600 hover:text-blue-600 transition-colors">Tech Hub</a>
                    <a href="/sustainable-investment" class="text-gray-600 hover:text-blue-600 transition-colors">Sustainable</a>
                    <a href="/lifestyle-investment" class="text-gray-600 hover:text-blue-600 transition-colors">Lifestyle</a>
                    <a href="/nordic-gateway" class="text-gray-600 hover:text-blue-600 transition-colors">Nordic Gateway</a>
                    <a href="/contact" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Contact Us</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
        ${getPageContent(page)}
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <img src="/logo.svg" alt="Ultiro" class="h-8 w-auto">
                        <span class="text-xl font-bold">Ultiro</span>
                    </div>
                    <p class="text-gray-400">Your trusted partner for successful Scandinavian market entry.</p>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Services</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="/international-investors" class="hover:text-white transition-colors">Market Entry</a></li>
                        <li><a href="/tech-investment" class="hover:text-white transition-colors">Tech Investment</a></li>
                        <li><a href="/sustainable-investment" class="hover:text-white transition-colors">Sustainable Investment</a></li>
                        <li><a href="/nordic-gateway" class="hover:text-white transition-colors">Nordic Expansion</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Resources</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="/insights" class="hover:text-white transition-colors">Insights</a></li>
                        <li><a href="/portfolio" class="hover:text-white transition-colors">Portfolio</a></li>
                        <li><a href="/careers" class="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="/contact" class="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-semibold mb-4">Contact</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li>Grev Turegatan 16</li>
                        <li>114 46 Stockholm, Sweden</li>
                        <li>+46 8 123 456</li>
                        <li>info@ultiro.se</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Ultiro. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Contact Form Modal -->
    <div id="contact-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="bg-white rounded-lg max-w-md w-full p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold">Get Started</h3>
                    <button onclick="closeContactModal()" class="text-gray-400 hover:text-gray-600">&times;</button>
                </div>
                <form onsubmit="submitContactForm(event)">
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script>
        // Contact form functionality
        function openContactModal() {
            document.getElementById('contact-modal').classList.remove('hidden');
        }
        
        function closeContactModal() {
            document.getElementById('contact-modal').classList.add('hidden');
        }
        
        async function submitContactForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        message: formData.get('message'),
                        formType: 'Contact Form',
                        subject: 'New Contact Form Submission'
                    })
                });
                
                if (response.ok) {
                    alert('Thank you for your message. We will be in touch soon!');
                    closeContactModal();
                    event.target.reset();
                } else {
                    alert('Sorry, there was an error sending your message. Please try again.');
                }
            } catch (error) {
                alert('Sorry, there was an error sending your message. Please try again.');
            }
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>`;
}

function getPageContent(page) {
  // This would be replaced with actual page content from our marketing documents
  // For now, returning a placeholder that matches the page type
  const contentMap = {
    'international-investors': getInternationalInvestorsContent(),
    'tech-investment': getTechInvestmentContent(),
    'sustainable-investment': getSustainableInvestmentContent(),
    'lifestyle-investment': getLifestyleInvestmentContent(),
    'nordic-gateway': getNordicGatewayContent()
  };
  
  return contentMap[page.route] || '<div class="py-20 text-center"><h1 class="text-4xl font-bold">Page Coming Soon</h1></div>';
}

function getInternationalInvestorsContent() {
  return `
    <!-- Hero Section -->
    <section class="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6 fade-in">
                Your Gateway to <span class="text-blue-600">Scandinavian</span> Market Success
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
                Unlock the Nordic advantage with our proven 90-day market entry strategy. 
                Join international investors achieving 35% average ROI in Sweden's thriving economy.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                <button onclick="openContactModal()" class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover-lift">
                    Start Your Journey
                </button>
                <a href="/docs/INTERNATIONAL_INVESTOR_MARKET_ENTRY.md" class="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors hover-lift">
                    Download Guide
                </a>
            </div>
        </div>
    </section>

    <!-- Key Statistics -->
    <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center fade-in">
                    <div class="text-4xl font-bold text-blue-600 mb-2">#1</div>
                    <div class="text-gray-600">Innovation Hub in Europe</div>
                </div>
                <div class="text-center fade-in">
                    <div class="text-4xl font-bold text-blue-600 mb-2">90%</div>
                    <div class="text-gray-600">English Proficiency</div>
                </div>
                <div class="text-center fade-in">
                    <div class="text-4xl font-bold text-blue-600 mb-2">35%</div>
                    <div class="text-gray-600">Average ROI</div>
                </div>
                <div class="text-center fade-in">
                    <div class="text-4xl font-bold text-blue-600 mb-2">27M</div>
                    <div class="text-gray-600">Nordic Consumers</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Success Framework -->
    <section class="py-16 px-4 bg-gray-50">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 fade-in">Our Market Entry Success Framework</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-lg shadow-sm hover-lift fade-in">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span class="text-blue-600 font-bold">1</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Strategic Assessment</h3>
                    <p class="text-gray-600 mb-4">Comprehensive market viability analysis and financial modeling.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm hover-lift fade-in">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span class="text-blue-600 font-bold">2</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Legal & Financial Setup</h3>
                    <p class="text-gray-600 mb-4">Company registration, bank establishment, and tax optimization.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow-sm hover-lift fade-in">
                    <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span class="text-blue-600 font-bold">3</span>
                    </div>
                    <h3 class="text-xl font-semibold mb-4">Operational Launch</h3>
                    <p class="text-gray-600 mb-4">Talent acquisition and client acquisition campaigns.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-6 fade-in">
                Ready to Expand to Scandinavia?
            </h2>
            <p class="text-xl text-blue-100 mb-8 fade-in">
                Join 40+ international companies who have successfully entered the Nordic market with Ultiro.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center fade-in">
                <button onclick="openContactModal()" class="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold hover-lift">
                    Schedule Consultation
                </button>
                <a href="/docs/README.md" class="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold hover-lift">
                    View All Services
                </a>
            </div>
        </div>
    </section>
  `;
}

function getTechInvestmentContent() {
  return `
    <section class="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6 fade-in">
                Nordic Tech <span class="text-purple-600">Investment Hub</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
                Connecting global innovation to Scandinavian excellence. Access €7B+ tech ecosystem and 200+ Nordic VCs.
            </p>
            <button onclick="openContactModal()" class="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hover-lift fade-in">
                Connect with VCs
            </button>
        </div>
    </section>
  `;
}

function getSustainableInvestmentContent() {
  return `
    <section class="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6 fade-in">
                Sustainable Investment <span class="text-green-600">Sweden</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
                Leading the global green transition. #1 sustainability ranking with €1.5B green funding opportunities.
            </p>
            <button onclick="openContactModal()" class="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors hover-lift fade-in">
                Invest Green
            </button>
        </div>
    </section>
  `;
}

function getLifestyleInvestmentContent() {
  return `
    <section class="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6 fade-in">
                Lifestyle Investment <span class="text-orange-600">Sweden</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
                Where quality of life meets quality investment. #1 livability index with exceptional family benefits.
            </p>
            <button onclick="openContactModal()" class="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors hover-lift fade-in">
                Live & Invest
            </button>
        </div>
    </section>
  `;
}

function getNordicGatewayContent() {
  return `
    <section class="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-6 fade-in">
                Strategic Nordic <span class="text-indigo-600">Gateway</span>
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto fade-in">
                Your complete Scandinavian market access solution. 27M consumers across 5 countries with unified strategy.
            </p>
            <button onclick="openContactModal()" class="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors hover-lift fade-in">
                Expand Regionally
            </button>
        </div>
    </section>
  `;
}

// Create static pages directory and files
const outputDir = path.join(__dirname, 'dist-static');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate static pages
staticPages.forEach(page => {
  const html = createStaticHTML(page);
  const filePath = path.join(outputDir, `${page.route}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`✅ Generated: ${page.route}.html`);
});

// Copy assets
const publicDir = path.join(__dirname, 'public');
const outputPublicDir = path.join(outputDir, 'public');

if (fs.existsSync(publicDir)) {
  copyFolderSync(publicDir, outputPublicDir);
  console.log('✅ Copied public assets');
}

// Copy docs
const docsDir = path.join(__dirname, 'docs');
const outputDocsDir = path.join(outputDir, 'docs');

if (fs.existsSync(docsDir)) {
  copyFolderSync(docsDir, outputDocsDir);
  console.log('✅ Copied documentation');
}

console.log('\n🎉 Static site generation complete!');
console.log(`📁 Output directory: ${outputDir}`);
console.log('🚀 Run "npm run serve:static" to preview the site');

function copyFolderSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}