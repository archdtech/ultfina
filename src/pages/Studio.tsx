import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, LineChart, Users, Check, Rocket, Wrench, Target, Building2, Lightbulb, Network } from 'lucide-react';

const Studio: React.FC = () => {
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
            Where Nordic Innovation<br />
            Meets Global Ambition
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            At Ultiro, we're the bridge between Nordic ingenuity and global markets, empowering innovators to create lasting impact across borders. Our deep expertise in Nordic markets, particularly Sweden, enables sustainable global scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#team" className="btn-primary inline-flex items-center">
              Meet Our Team
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section 
        id="team"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">The foundation of our success as venture builders</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-[#FF3D22]" />,
                title: "Deep Nordic Expertise",
                description: "Our team combines years of experience in Nordic markets with global perspective."
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-[#FF3D22]" />,
                title: "Venture Building DNA",
                description: "Proven track record of scaling companies from concept to market leaders."
              },
              {
                icon: <Network className="w-8 h-8 text-[#FF3D22]" />,
                title: "Innovation Mindset",
                description: "Constantly pushing boundaries to create sustainable, impactful solutions."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white border-2 border-[#FF3D22] rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What Sets Us Apart */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-400">Our unique approach to Nordic scale innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#FF3D22]" />,
                title: "Focus on Scaleups",
                description: "We work with proven businesses that have achieved €1-2M+ in revenue"
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF3D22]" />,
                title: "Co-Ownership",
                description: "We invest in long-term success through equity partnerships"
              },
              {
                icon: <Globe className="w-8 h-8 text-[#FF3D22]" />,
                title: "Nordic Expertise",
                description: "We simplify market entry with hyper-localized strategies"
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#FF3D22]" />,
                title: "Vertical Focus",
                description: "Specializing in Fintech, ClimateTech, and AI solutions"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-black border border-gray-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why the Nordics */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why the Nordics?</h2>
            <p className="text-xl text-gray-600">A Hub for Global Innovation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Rocket className="w-8 h-8 text-[#FF3D22]" />,
                title: "Top Innovation Hub",
                description: "Nordic countries consistently rank among the world's leading ecosystems for scaling innovative businesses."
              },
              {
                icon: <Check className="w-8 h-8 text-[#FF3D22]" />,
                title: "Business-Friendly",
                description: "Strong governmental support and a well-developed ecosystem built for rapid scaling."
              },
              {
                icon: <Target className="w-8 h-8 text-[#FF3D22]" />,
                title: "Scalable Market",
                description: "A tech-savvy population with high purchasing power and a proven track record of adopting new technologies quickly."
              },
              {
                icon: <Wrench className="w-8 h-8 text-[#FF3D22]" />,
                title: "Sustainability Focus",
                description: "A leading region in green innovation, creating a sustainable environment for growth and long-term scalability."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Impact */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-400">The Results We've Achieved Together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "15+",
                title: "Scaleups Accelerated",
                description: "From East African fintechs to European ClimateTech innovators"
              },
              {
                number: "€50M+",
                title: "Green Investments",
                description: "Facilitated through NOBON, our carbon project financing platform"
              },
              {
                number: "30%",
                title: "Retention Boost",
                description: "Achieved by Nordic retailers using Paytack's loyalty solutions"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 bg-black border border-gray-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#FF3D22] mb-4">{item.number}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to scale your impact?
          </motion.h2>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/apply-founder" className="btn-primary inline-flex items-center">
              Join Our Team
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="/apply-partner" className="inline-flex items-center px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full">
              Apply as Partner
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Studio;