import { motion } from 'framer-motion';
import { ArrowRight, Building2, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const HomeV1 = () => {
  return (
    <div className="bg-[#0E0E12] min-h-screen text-white">
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
            <TypingEffect />
          </motion.div>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            Hands-on venture building for international scaleups. We specialize in accelerated Nordic market entry, with specialized focus on Sweden. Navigate complex regulatory landscapes and build strong local foundations.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/scale" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E63946] text-white hover:bg-white hover:text-[#0E0E12] transition-all duration-300"
            >
              Explore Nordic Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/apply-founder" 
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white hover:bg-white hover:text-[#0E0E12] transition-all duration-300"
            >
              Apply as Founder
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section 
        className="py-20 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Choose Your Path to Scale</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Select the journey that matches your ambitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Scale Your Business",
                description: "Are you a founder or entrepreneur looking to scale your business? Let us help you navigate the Nordic or East African markets with tailored solutions and operational support.",
                cta: "Apply as Founder",
                icon: Rocket,
                link: "/apply-founder"
              },
              {
                title: "Partner with Us",
                description: "Are you a venture builder, investor, or partner looking to collaborate with innovative scaleups? Join us in creating long-term value and driving market expansion.",
                cta: "Apply as Partner",
                icon: Building2,
                link: "/apply-partner"
              },
              {
                title: "Support Innovation",
                description: "Are you a business support organization seeking to help companies enter new markets? Partner with us to deliver impactful innovation programs.",
                cta: "Apply as Organization",
                icon: Users,
                link: "/apply-partner"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#161619] p-8 hover:bg-[#1E1E22] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <item.icon className="w-12 h-12 text-[#E63946] mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <Link 
                  to={item.link} 
                  className="inline-flex items-center text-[#E63946] hover:text-white transition-colors font-medium"
                >
                  {item.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section 
        className="py-20 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">See Our Impact</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Explore how we've helped scaleups achieve success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-[#161619] hover:bg-[#1E1E22] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className="text-[#E63946] text-lg font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center px-6 py-3 bg-[#E63946] text-white hover:bg-white hover:text-[#0E0E12] transition-all duration-300"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Insights Section */}
      <motion.section 
        className="py-20 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Learn from Our Expertise</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Discover actionable insights on scaling businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                readTime: "5 min read",
                title: "Navigating Nordic Market Entry",
                description: "Key strategies for successful market entry in Sweden and neighboring countries."
              },
              {
                readTime: "8 min read",
                title: "Building Global from Day One",
                description: "How to structure your startup for international scalability from inception."
              }
            ].map((item, index) => (
              <motion.article 
                key={index}
                className="bg-[#161619] hover:bg-[#1E1E22] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-8">
                  <div className="text-[#E63946] text-sm mb-2">{item.readTime}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <Link 
                    to="/insights" 
                    className="text-[#E63946] hover:text-white transition-colors inline-flex items-center font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/insights" 
              className="inline-flex items-center px-6 py-3 bg-[#E63946] text-white hover:bg-white hover:text-[#0E0E12] transition-all duration-300"
            >
              Explore Insights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomeV1;
