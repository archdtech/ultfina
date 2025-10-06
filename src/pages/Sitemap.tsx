import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  // Main navigation pages
  const mainPages = [
    { name: 'Home', path: '/', description: 'Main landing page' },
    { name: 'Scale', path: '/scale', description: 'Solutions for scaling to Nordics & beyond' },
    { name: 'Studio', path: '/studio', description: 'Where Nordic innovation meets global ambition' },
    { name: 'Programs', path: '/programs', description: 'Our programs for founders and partners' },
    { name: 'Portfolio', path: '/portfolio', description: 'Our portfolio companies and success stories' },
    { name: 'Insights', path: '/insights', description: 'Articles and resources about scaling' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
  ];

  // Portfolio detail pages
  const portfolioPages = [
    { name: 'Nobon', path: '/portfolio/nobon', description: 'Financial technology solutions' },
    { name: 'Paytota', path: '/portfolio/paytota', description: 'Payment processing platform' },
    { name: 'Paytack', path: '/portfolio/paytack', description: 'Financial tracking and management' },
    { name: 'B2and', path: '/portfolio/b2and', description: 'B2B networking platform' },
    { name: 'Pricetify', path: '/portfolio/pricetify', description: 'Dynamic pricing solutions' },
  ];

  // Application pages
  const applicationPages = [
    { name: 'Apply as Founder', path: '/apply-founder', description: 'Application for founders' },
    { name: 'Apply as Partner', path: '/apply-partner', description: 'Application for partners' },
  ];

  // Utility and other pages
  const utilityPages = [
    { name: 'Design System', path: '/design-system', description: 'UI components and design guidelines' },
    { name: 'Sitemap', path: '/sitemap', description: 'Overview of site structure' },
  ];

  const SitemapSection = ({ title, pages }: { title: string; pages: Array<{ name: string; path: string; description: string }> }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="w-8 h-8 bg-[#FF3D22] rounded-full flex items-center justify-center mr-3 text-white text-sm">
          {title.charAt(0)}
        </span>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link 
            key={page.path} 
            to={page.path} 
            className="p-4 bg-[#0D0D0D] rounded-lg border border-gray-800 transition-all duration-300 hover:border-[#FF3D22] hover:shadow-lg group"
          >
            <div className="flex items-center mb-2">
              <ChevronRight className="w-4 h-4 text-[#FF3D22] mr-2" />
              <h3 className="font-bold">{page.name}</h3>
            </div>
            <p className="text-gray-400 text-sm ml-6">{page.description}</p>
            <div className="mt-2 ml-6 text-[#FF3D22] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
              Visit page
              <ArrowRight className="ml-1 w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-4">Sitemap</h1>
        <p className="text-xl text-gray-400 max-w-3xl mb-12">
          A complete guide to all pages on our website
        </p>

        <SitemapSection title="Main Navigation" pages={mainPages} />
        <SitemapSection title="Portfolio Companies" pages={portfolioPages} />
        <SitemapSection title="Application Pages" pages={applicationPages} />
        <SitemapSection title="Utility Pages" pages={utilityPages} />

        <div className="mt-16 p-6 bg-gradient-to-r from-[#0D0D0D] to-black rounded-lg border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-gray-400 mb-6">
            If you can't find what you're looking for or have any questions about our website, please don't hesitate to contact us.
          </p>
          <Link to="/contact" className="btn-primary rounded-full inline-flex items-center">
            Contact Us
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
