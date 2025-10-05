import { motion } from 'framer-motion';
import { ArrowRight, Building2, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const HomeV0 = () => {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center relative overflow-hidden pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.h1 
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
            {...fadeIn}
          >
            Unlock Global Scale<br/>
            <span className="text-[#E63946]">Nordic Expertise, Worldwide Growth</span>
          </motion.h1>
          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <TypingEffect textColor="text-black" />
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            The premier venture studio specializing in Nordic market entry and expansion. We help international scaleups establish strong foundations in Sweden and beyond.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/scale" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E63946] text-white hover:bg-[#c52836] transition-all duration-300"
            >
              Scale in Nordics
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/apply-founder" 
              className="inline-flex items-center justify-center px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Apply as Founder
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        className="py-20 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our V0 Approach</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">Specialized solutions for your growth journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Market Entry",
                description: "Navigate complex regulatory landscapes and establish your presence in the Nordic markets with our specialized local expertise.",
                cta: "Learn More",
                icon: Rocket,
                link: "/scale"
              },
              {
                title: "Growth Strategy",
                description: "Develop and implement tailored growth strategies to accelerate your expansion in Sweden and across the Nordics.",
                cta: "Our Approach",
                icon: Building2,
                link: "/studio"
              },
              {
                title: "Local Partnerships",
                description: "Connect with our network of trusted partners, investors, and business support organizations to scale efficiently.",
                cta: "View Network",
                icon: Users,
                link: "/programs"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 p-8 hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <item.icon className="w-12 h-12 text-[#E63946] mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-[#E63946] hover:text-black transition-colors font-medium"
                >
                  {item.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Showcase */}
      <motion.section 
        className="py-20 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Success Stories</h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">See how we've helped companies like yours succeed</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                category: "Fintech",
                title: "Paytota",
                description: "Expanded into Sweden with fully compliant payment solutions"
              },
              {
                category: "SaaS",
                title: "B2and",
                description: "Secured strategic partnerships and first enterprise clients"
              },
              {
                category: "E-commerce",
                title: "Pricetify",
                description: "Localized operations and achieved 300% growth in 6 months"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 hover:bg-gray-200 transition-colors duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className="text-[#E63946] text-lg font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-6 py-3 bg-[#E63946] text-white hover:bg-[#c52836] transition-all duration-300"
            >
              Explore Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomeV0;
