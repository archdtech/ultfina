import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Rocket, Building2, Target, Users, ChevronDown, Network, Shield, ChevronLeft, ChevronRight, Check, Zap } from 'lucide-react';
import InteractiveBackground from '../components/InteractiveBackground';
import { parallaxScroll } from '../utils/animations';

const Scale: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nordic' | 'global'>('nordic');
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Create refs for parallax effect
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  
  // Initialize animations
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initAnimations = setTimeout(() => {
      // Create a parallax effect for the background
      if (parallaxBgRef.current) {
        parallaxScroll(parallaxBgRef.current, -0.1);
      }
    }, 100);
    
    return () => clearTimeout(initAnimations);
  }, []);

  const approachData = [
    {
      title: "We Build Winning Teams & Ideas.",
      description: "We create and scale high-potential companies by combining deep expertise with insights from our network, giving our ventures a true unfair advantage."
    },
    {
      title: "We Partner with Founding Teams.",
      description: "We match breakthrough ideas with driven entrepreneurs, joining as co-founders to support them at every stage of growth."
    },
    {
      title: "We Invest to Scale.",
      description: "We lead Seed rounds and reinvest as our companies grow, ensuring long-term success."
    },
    {
      title: "We Connect Teams to Opportunity.",
      description: "Our founders gain direct access to customers, investors, advisors, and partners who accelerate their journey."
    },
    {
      title: "We Provide Expert Support.",
      description: "From AI to go-to-market strategy, our founders and teams leverage top-tier specialists, fueling success from creation to exit."
    }
  ];

  const ServiceAccordion: React.FC<{ title: string; content: string }> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="border-b border-gray-700">
        <button
          className="w-full py-4 flex justify-between items-center text-left text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold">{title}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="pb-4 text-gray-400">{content}</p>
        </motion.div>
      </div>
    );
  };

  // Animations for content transitions
  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const nordicServices = [
    {
      title: "Strategic Nordic Expansion",
      content: "Facilitating rapid expansion into other Nordic countries through our established network and market insights."
    },
    {
      title: "Operational Scaling",
      content: "Optimizing and expanding your local infrastructure, including team growth, logistics, and resource management."
    },
    {
      title: "Enhanced Partnership Development",
      content: "Forging strategic alliances and expanding existing partnerships to maximize regional penetration."
    },
    {
      title: "Nordic Sales Acceleration",
      content: "Tailoring and scaling sales strategies to capture larger market shares within the Nordic region."
    },
    {
      title: "Nordic Regulatory Navigation",
      content: "Providing ongoing support for navigating and adapting to the unique regulatory environments of each Nordic country."
    }
  ];

  const globalServices = [
    {
      title: "Global Market Entry Strategy",
      content: "Conducting in-depth market analysis and developing tailored entry strategies for diverse international markets."
    },
    {
      title: "Global Partner Network",
      content: "Providing access to our extensive network of international partners, investors, and industry experts."
    },
    {
      title: "Operational Excellence",
      content: "Streamlining operations, supply chains, and logistics to ensure global efficiency and scalability."
    },
    {
      title: "International Regulatory Compliance",
      content: "Navigating complex international regulations and ensuring compliance in diverse legal environments."
    },
    {
      title: "Global Sales Channel Development",
      content: "Building and optimizing sales channels to reach international customers and expand your global footprint."
    }
  ];

  return (
    <div className="pt-16 overflow-hidden bg-black text-white">
      {/* Hero Section with Background Image */}
      <motion.section 
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" ref={parallaxBgRef}>
          <img 
            src="/images/Scalepage.png" 
            alt="Scale your business background" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <InteractiveBackground />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Scale <span className="text-gray-400">to Nordics & beyond</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mb-8 whitespace-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Everything from building in-country operations and developing international teams to the full suite of operational support to help international companies establish footholds in Nordic markets and beyond.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
          </motion.div>
        </div>
      </motion.section>

      {/* Choose Your Path to Growth Section with Tabbed Navigation */}
      <div id="explore" className="py-16 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10">Choose Your Path to Growth</h2>
          
          {/* Tabbed Navigation */}
          <div className="flex items-center mb-10 border border-gray-800 rounded-lg overflow-hidden">
            <button 
              onClick={() => setActiveTab('nordic')}
              className={`flex-1 py-4 text-center font-medium transition-all duration-300 ${
                activeTab === 'nordic' 
                  ? 'bg-[#FF3D22] text-white' 
                  : 'bg-[#0D0D0D] text-gray-400 hover:bg-gray-900'
              }`}
            >
              <motion.div
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className={`w-5 h-5 mr-2 ${activeTab === 'nordic' ? 'text-white' : 'text-gray-500'}`} />
                Nordic Scaling
              </motion.div>
            </button>
            <button 
              onClick={() => setActiveTab('global')}
              className={`flex-1 py-4 text-center font-medium transition-all duration-300 ${
                activeTab === 'global' 
                  ? 'bg-[#FF3D22] text-white' 
                  : 'bg-[#0D0D0D] text-gray-400 hover:bg-gray-900'
              }`}
            >
              <motion.div
                className="flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className={`w-5 h-5 mr-2 ${activeTab === 'global' ? 'text-white' : 'text-gray-500'}`} />
                Global Scaling
              </motion.div>
            </button>
          </div>

          {/* Dynamic Content Panel */}
          <AnimatePresence mode="wait">
            {activeTab === 'nordic' ? (
              <motion.div
                key="nordic"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {/* Main content column */}
                <div className="lg:col-span-2">
                  <motion.div variants={itemVariants}>
                    <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800 mb-6">
                      <h3 className="text-xl font-bold mb-3">Deepening Your Nordic Footprint</h3>
                      <p className="text-gray-400">
                        Building on your initial Nordic success, we focus on expanding your market share, optimizing operations, and establishing a robust regional presence.
                      </p>
                    </div>
                  </motion.div>

                  <motion.h4 
                    variants={itemVariants}
                    className="text-lg font-semibold mb-4"
                  >
                    Our Nordic Services
                  </motion.h4>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    {nordicServices.map((service, index) => (
                      <ServiceAccordion
                        key={index}
                        title={service.title}
                        content={service.content}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Value proposition column */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Trophy className="w-5 h-5 text-[#FF3D22] mr-2" />
                      Why Choose Nordic Scaling?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Leverage our intimate understanding of the Nordic business landscape</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Access our established network of partners and decision-makers</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Benefit from our proven track record of Nordic market success</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Enhanced market share and brand recognition across the Nordics</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-[#FF3D22] mr-2" />
                      Nordic Scale Benefits
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Rocket className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Rapid and efficient expansion within the Nordic markets</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Optimized operations for sustainable regional growth</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Navigating complex Nordic regulations with ease</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="global"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-3 gap-10"
              >
                {/* Main content column */}
                <div className="lg:col-span-2">
                  <motion.div variants={itemVariants}>
                    <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800 mb-6">
                      <h3 className="text-xl font-bold mb-3">Expanding Your International Reach</h3>
                      <p className="text-gray-400">
                        Taking your success beyond the Nordics, we provide comprehensive support for international market entry and global expansion.
                      </p>
                    </div>
                  </motion.div>

                  <motion.h4 
                    variants={itemVariants}
                    className="text-lg font-semibold mb-4"
                  >
                    Our Global Services
                  </motion.h4>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    {globalServices.map((service, index) => (
                      <ServiceAccordion
                        key={index}
                        title={service.title}
                        content={service.content}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Value proposition column */}
                <motion.div variants={itemVariants} className="space-y-6">
                  <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Globe className="w-5 h-5 text-[#FF3D22] mr-2" />
                      Why Choose Global Scaling?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Leverage our global market expertise and insights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Tap into our diverse international network</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Streamlined international regulatory compliance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Accelerated global go-to-market strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#0D0D0D] p-6 rounded-sm border border-gray-800">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Zap className="w-5 h-5 text-[#FF3D22] mr-2" />
                      Global Scale Benefits
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Network className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Access to a powerful and diverse global network</span>
                      </li>
                      <li className="flex items-start">
                        <Building2 className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Optimized operations for international success</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-[#FF3D22] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Build and manage high-performing global teams</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Our Approach Section with Carousel */}
      <motion.section 
        className="py-24 bg-black border-b border-gray-800"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">Our Approach</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              How we build and scale world-class ventures
            </p>
          </motion.div>
          
          <div className="relative px-4 md:px-10">
            {/* Slider Navigation */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 px-1 md:px-2 z-10">
              <button 
                onClick={() => setActiveSlide(prev => (prev === 0 ? approachData.length - 3 : prev - 1))}
                className="p-1 md:p-2 bg-[#FF3D22] rounded-full text-white hover:bg-[#ff5c45] transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={() => setActiveSlide(prev => (prev === approachData.length - 3 ? 0 : prev + 1))}
                className="p-1 md:p-2 bg-[#FF3D22] rounded-full text-white hover:bg-[#ff5c45] transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
            
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-4 md:gap-6"
                initial={false}
                animate={{ x: `-${activeSlide * (window.innerWidth < 768 ? 100 : 33.33)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {approachData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-[#0D0D0D] p-6 md:p-8 border border-gray-800 hover:border-[#FF3D22] transition-colors min-w-[calc(100%-0.5rem)] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.33%-1rem)] h-auto md:h-96 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">{item.title}</h3>
                    <p className="text-gray-400 flex-grow">{item.description}</p>
                    <div className="mt-6 flex justify-end">
                      <ArrowRight className="text-[#FF3D22]" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(approachData.length - 2)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-[#FF3D22] w-8' : 'bg-gray-500'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Scale Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you're looking to deepen your Nordic footprint or expand globally, our team of experts is ready to guide you every step of the way.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/apply-partner" className="btn-primary inline-flex items-center">
              Apply as Partner
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="/contact" className="btn-outline inline-flex items-center">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Trophy icon component
const Trophy = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

export default Scale;
