import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Leaf, LineChart } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="min-h-[70vh] flex items-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Where Vision<br />
            Meets Execution
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore the ventures we've co-built, where Scandinavian efficiency meets global ambition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#explore" className="inline-flex items-center px-8 py-3 bg-[#E63946] text-white hover:bg-orange-600 transition-colors rounded-full">
              Explore Our Portfolio
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Categories */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fintech & Payments */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Wallet className="w-8 h-8 text-[#E63946] mr-4" />
              <h2 className="text-3xl font-bold">Fintech & Payments</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Fintech platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leading Fintech Platform</h3>
                  <p className="text-gray-600 mb-4">From €1.5M to €10M revenue in the Nordic market</p>
                  <a href="#" className="text-[#E63946] hover:text-red-700 flex items-center">
                    Read Case Study <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="ClimateTech solution" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">ClimateTech Innovator</h3>
                  <p className="text-gray-600 mb-4">Successfully launched in Sweden with localized compliance</p>
                  <a href="#" className="text-[#E63946] hover:text-red-700 flex items-center">
                    View Success Story <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Building className="w-8 h-8 text-[#E63946] mr-4" />
              <h2 className="text-3xl font-bold">Payment Platform</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Paytack app" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Paytack</h3>
                  <p className="text-gray-600 mb-4">A cloud-based universal payment platform streamlining transactions for 500+ EU merchants.</p>
                  <a href="#" className="text-[#E63946] hover:text-orange-600 inline-flex items-center">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ClimateTech & Sustainability */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Leaf className="w-8 h-8 text-[#E63946] mr-4" />
              <h2 className="text-3xl font-bold">ClimateTech & Sustainability</h2>
            </div>
            <motion.div 
              className="bg-black text-white rounded-lg overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">NOBON</h3>
                  <p className="text-gray-400 mb-6">A digital platform connecting carbon project developers with €50M+ in green investments.</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center mr-4">

          {/* Enterprise & SaaS */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Building2 className="w-8 h-8 text-[#E63946] mr-4" />
              <h2 className="text-3xl font-bold">Enterprise & SaaS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="SaaS Platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Enterprise SaaS Platform</h3>
                  <p className="text-gray-600 mb-4">Established strategic partnerships across East Africa</p>
                  <a href="#" className="text-[#E63946] hover:text-red-700 flex items-center">
                    Explore Impact <ArrowRight className="ml-2" size={16} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

                        <span className="text-xl font-bold">€50M+</span>
                      </div>
                      <p className="text-gray-400">Green investments facilitated</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center mr-4">
                        <span className="text-xl font-bold">100+</span>
                      </div>
                      <p className="text-gray-400">Carbon projects funded</p>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center mt-6 text-[#E63946] hover:text-orange-400">
                    View case study <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className="relative h-full min-h-[300px]">
                  <img 
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Sustainable future"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Growth Marketing */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <LineChart className="w-8 h-8 text-[#E63946] mr-4" />
              <h2 className="text-3xl font-bold">Scale Marketing</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="B2AND platform" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">B2AND</h3>
                  <p className="text-gray-600 mb-4">A Nordic-born marketing platform achieving exponential global scale.</p>
                  <a href="#" className="text-[#E63946] hover:text-orange-600 inline-flex items-center">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Pricetify tool" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pricetify</h3>
                  <p className="text-gray-600 mb-4">A price comparison tool empowering offline merchants with digital inventory management.</p>
                  <a href="#" className="text-[#E63946] hover:text-orange-600 inline-flex items-center">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#explore" className="inline-flex items-center px-8 py-3 bg-[#E63946] text-white hover:bg-orange-600 transition-colors rounded-full">
              Explore Our Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#partner" className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-full">
              Partner with Us
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;