import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Rocket, Users, BookOpen, Code, Globe, Building2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/InteractiveBackground';
import { parallaxScroll } from '../utils/animations';

const Programs = () => {
  // Create refs for parallax effects
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const headerBgRef = useRef<HTMLDivElement>(null);

  // Initialize parallax effects
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initAnimations = setTimeout(() => {
      // Create parallax effects for the backgrounds
      if (parallaxBgRef.current) {
        parallaxScroll(parallaxBgRef.current, -0.1);
      }
      if (headerBgRef.current) {
        parallaxScroll(headerBgRef.current, -0.1);
      }
    }, 100);
    
    return () => clearTimeout(initAnimations);
  }, []);


  
  return (
    <div className="pt-16 relative">
      {/* Hero Section with Background Image */}
      <motion.section 
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Parallax background */}
        <div 
          ref={headerBgRef}
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url("/programs.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Interactive background */}
        <InteractiveBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transforming<br />
            Cross Border Innovation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Strategic market entry and expansion programs that bridge ecosystems, unlock opportunities, and accelerate cross-border growth for ambitious companies.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#programs" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
              Explore Programs
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/contact" className="border border-white text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-white/10 transition-colors">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Trade Promotion Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">For Trade Promotion Organizations</h2>
              <p className="text-xl text-gray-600 mb-8">
                We collaborate with government agencies and trade organizations to build strategic bridges between markets, creating sustainable growth pathways for innovative companies.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Rocket className="w-6 h-6 text-[#FF3D22]" />,
                    title: "Strategic Market Access Programs",
                    description: "Custom-designed pathways into Nordic markets with measurable outcomes"
                  },
                  {
                    icon: <Users className="w-6 h-6 text-[#FF3D22]" />,
                    title: "Industry-Specific Delegations",
                    description: "Targeted connections with sector leaders and decision-makers"
                  },
                  {
                    icon: <BookOpen className="w-6 h-6 text-[#FF3D22]" />,
                    title: "Regulatory Navigation Framework",
                    description: "Comprehensive guidance through complex Nordic compliance landscapes"
                  },
                  {
                    icon: <Code className="w-6 h-6 text-[#FF3D22]" />,
                    title: "Innovation Partnership Platforms",
                    description: "Co-creation opportunities with established Nordic enterprises"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Nordic innovation hub"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm">
                <p className="text-lg font-semibold mb-2">Impact Metrics</p>
                <p className="text-gray-300">
                  "Our tailored programs have facilitated over €120M in cross-border investments and created 350+ high-value partnerships."
                </p>
                <p className="text-[#FF3D22] mt-2">—Measured Program Outcomes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Nordic Scaleups Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">For Nordic Scaleups</h2>
            <p className="text-xl text-gray-400">
              We transform Nordic innovation into global market leadership through strategic expansion programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Market Selection & Entry",
                description: "Data-driven identification of optimal markets with customized entry roadmaps"
              },
              {
                title: "Global Growth Acceleration",
                description: "Structured scaling methodology with access to our worldwide partner network"
              },
              {
                title: "International Investment Readiness",
                description: "Preparation for global capital markets with investor matchmaking"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Details Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Explore Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our specialized programs can accelerate your business growth
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Nordic Scale Program */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">Nordic Scale Program</h3>
                <p className="text-gray-700 mb-6">
                  The Nordic Scale Program is designed to help international tech companies expand and scale successfully within the Nordic region—one of the world's most innovative and digitally advanced markets. By leveraging the region's thriving tech ecosystems, vibrant startup culture, and strong government support, the program offers tailored strategies for companies looking to enter or grow in this dynamic market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Enable Rapid Market Penetration</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Foster Innovation & Collaboration</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Create Scalable Growth Opportunities</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/programs/nordic-scale-program" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Nordic markets"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">12-week comprehensive program</p>
                  <p className="text-gray-300">Tailored for tech companies entering the Nordic region</p>
                </div>
              </div>
            </motion.div>

            {/* Global Competence Program */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Global team collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Strategic GCC establishment</p>
                  <p className="text-gray-300">Eastern Europe, East Africa, or South Asia</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold mb-4">Global Competence Program</h3>
                <p className="text-gray-700 mb-6">
                  Our program is designed to help international tech companies build Global Capability Centers (GCCs) that not only reduce operational costs but accelerate business transformation. By aligning with long-term organizational goals and leveraging global talent, technology, and innovation, your GCC can become a driving force for competitive advantage, product development, and digital transformation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building2 className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Create Strategic Value</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Foster Global Talent Networks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Enable Digital Transformation</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/programs/global-competence-program" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Trade Promotion Program */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">Trade Promotion Program</h3>
                <p className="text-gray-700 mb-6">
                  The Trade Promotion Program is designed to facilitate global partnerships and accelerate market expansion for IT services and tech scaleups. By collaborating with governments, embassies, and trade promotion agencies, we create targeted programs that unlock new opportunities for businesses to scale and innovate across international markets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Globe className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Facilitate Global Partnerships</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Rocket className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Drive Market Access</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-[#FF3D22] w-5 h-5 mt-1" />
                    <p className="text-gray-700">Harness Local Expertise</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/programs/trade-promotion-program" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Global trade collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Global market expansion</p>
                  <p className="text-gray-300">Tailored initiatives for tech companies</p>
                </div>
              </div>
            </motion.div>
          </div>
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
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Accelerate Your Growth?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join one of our programs and take your business to the next level
          </motion.p>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/apply-partner" className="bg-[#FF3D22] text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="border border-white text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-white/10 transition-colors">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Programs;