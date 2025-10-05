import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Rocket, Users } from 'lucide-react';
import TypingEffect from '../components/TypingEffect';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center bg-black text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="absolute top-0 right-0 w-72 h-72 bg-[#FF3D22] transform rotate-45 translate-x-32 -translate-y-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
          />
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 relative font-space-grotesk"
            {...fadeIn}
          >
            Unlock Global Scale:<br/>
            <span className="text-[#FF3D22]">Nordic Expertise, Worldwide Growth</span>
          </motion.h1>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <TypingEffect />
          </motion.div>
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            Hands-on venture building for international scaleups. We specialize in accelerated Nordic market entry, with specialized focus on Sweden. Navigate complex regulatory landscapes and build strong local foundations.
          </motion.p>
          <motion.div 
            className="space-x-6"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <a href="#apply" className="inline-flex items-center px-8 py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full">
              Explore Nordic & Swedish Solutions
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#partner" className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Choose Your Path to Scale</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Select the journey that matches your ambitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Scale Your Business",
                description: "Are you a founder or entrepreneur looking to scale your business? Let us help you navigate the Nordic or East African markets with tailored solutions and operational support.",
                cta: "Apply as Founder",
                icon: Rocket
              },
              {
                title: "Partner with Us",
                description: "Are you a venture builder, investor, or partner looking to collaborate with innovative scaleups? Join us in creating long-term value and driving market expansion.",
                cta: "Apply as Partner",
                icon: Building2
              },
              {
                title: "Support Innovation",
                description: "Are you a business support organization seeking to help companies enter new markets? Partner with us to deliver impactful innovation programs.",
                cta: "Apply as Organization",
                icon: Users
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-black p-8 border-2 border-[#FF3D22] hover:bg-[#111111] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <item.icon className="w-12 h-12 text-[#FF3D22] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <a href="#apply" className="inline-flex items-center text-[#FF3D22] hover:text-white transition-colors">
                  {item.cta}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="py-32 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">See Our Impact</h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">Explore how we've helped scaleups achieve success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Fintech",
                title: "Fintech Scaleup",
                description: "From €1.5M to €10M revenue in the Nordic market"
              },
              {
                category: "ClimateTech",
                title: "ClimateTech Innovator",
                description: "Successfully launched in Sweden with localized compliance"
              },
              {
                category: "Enterprise",
                title: "SaaS Platform",
                description: "Established strategic partnerships across East Africa"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-black border-2 border-[#FF3D22] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-6">
                  <div className="text-[#FF3D22] text-2xl font-bold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/portfolio" className="inline-flex items-center px-8 py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full">
              View Our Portfolio
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Insights Section */}
      <motion.section 
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-5xl font-extrabold mb-6 tracking-tight">Learn from Our Expertise</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Discover actionable insights on scaling businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                readTime: "5 min read",
                title: "5 Steps to De-Risk Market Entry in the Nordics",
                description: "Learn the essential strategies for successful market expansion"
              },
              {
                readTime: "7 min read",
                title: "Why Co-Ownership Models Drive Long-Term Success",
                description: "Discover how aligned incentives lead to sustainable growth"
              }
            ].map((item, index) => (
              <motion.article 
                key={index}
                className="bg-black p-6 border-2 border-[#FF3D22]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-[#FF3D22] text-sm mb-2">{item.readTime}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a href="/insights" className="text-[#FF3D22] hover:text-[#FF3D22] inline-flex items-center">
                  Read More
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/insights" className="inline-flex items-center px-8 py-3 bg-[#FF3D22] text-white hover:bg-white hover:text-[#FF3D22] hover:border-[#FF3D22] border-2 border-[#FF3D22] transition-all duration-300 rounded-full">
              Explore Insights
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;