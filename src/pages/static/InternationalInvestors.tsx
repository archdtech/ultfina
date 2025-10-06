import React from 'react';
import { Helmet } from 'react-helmet-async';

const InternationalInvestors: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>International Market Entry Investment | Ultiro</title>
        <meta name="description" content="Your gateway to Scandinavian market success. 90-day market entry, 35% ROI, regulatory navigation for international investors." />
        <meta name="keywords" content="international investment, Sweden market entry, Scandinavian expansion, Nordic investment" />
        
        {/* Open Graph */}
        <meta property="og:title" content="International Market Entry Investment | Ultiro" />
        <meta property="og:description" content="Your gateway to Scandinavian market success. 90-day market entry, 35% ROI, regulatory navigation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ultiro.se/international-investors" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="International Market Entry Investment | Ultiro" />
        <meta name="twitter:description" content="Your gateway to Scandinavian market success. 90-day market entry, 35% ROI." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Your Gateway to <span className="text-blue-600">Scandinavian</span> Market Success
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Unlock the Nordic advantage with our proven 90-day market entry strategy. 
                Join international investors achieving 35% average ROI in Sweden's thriving economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Start Your Journey
                </button>
                <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">#1</div>
                <div className="text-gray-600">Innovation Hub in Europe</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-gray-600">English Proficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">27M</div>
                <div className="text-gray-600">Nordic Consumers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Entry Framework */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Market Entry Success Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Strategic Assessment</h3>
                <p className="text-gray-600 mb-4">Comprehensive market viability analysis, competitive landscape mapping, and financial modeling.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Market opportunity analysis</li>
                  <li>• Competitive landscape</li>
                  <li>• Regulatory requirements</li>
                  <li>• ROI projections</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Legal & Financial Setup</h3>
                <p className="text-gray-600 mb-4">Company registration, bank establishment, tax optimization, and compliance setup.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Company registration</li>
                  <li>• Bank account setup</li>
                  <li>• Tax registration</li>
                  <li>• Visa processing</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Operational Launch</h3>
                <p className="text-gray-600 mb-4">Talent acquisition, supply chain establishment, marketing localization, and client acquisition.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Team recruitment</li>
                  <li>• Supply chain setup</li>
                  <li>• Marketing launch</li>
                  <li>• Client acquisition</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Proven Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Tech Startup Example</h3>
                <p className="text-gray-700 mb-4">German SaaS company achieved remarkable success in Swedish market.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-green-600">€2M</div>
                    <div className="text-sm text-gray-600">ARR in 12 months</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">15</div>
                    <div className="text-sm text-gray-600">Local employees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">Series A</div>
                    <div className="text-sm text-gray-600">From Swedish VCs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">90%</div>
                    <div className="text-sm text-gray-600">Faster market entry</div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Manufacturing Case</h3>
                <p className="text-gray-700 mb-4">US industrial equipment manufacturer expanded to Nordic region.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">€8M</div>
                    <div className="text-sm text-gray-600">Revenue in 18 months</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                    <div className="text-sm text-gray-600">Market share</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">5</div>
                    <div className="text-sm text-gray-600">Nordic countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">ROI improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Entry-Level</h3>
                <div className="text-3xl font-bold mb-4">€50,000</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Market viability assessment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Legal setup and registration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic network introductions
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                <div className="bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-4">Growth Package</h3>
                <div className="text-3xl font-bold mb-4">€150,000</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Complete market entry service
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    6 months operational support
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Advanced network access
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                  Choose Growth
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Premium Partnership</h3>
                <div className="text-3xl font-bold mb-4">€300,000+</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Full-scale market entry
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    12 months dedicated support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Strategic partnerships
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Expand to Scandinavia?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 40+ international companies who have successfully entered the Nordic market with Ultiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Download Free Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InternationalInvestors;