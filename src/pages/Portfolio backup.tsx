import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Wallet, Zap, Users, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/InteractiveBackground';
import { parallaxScroll } from '../utils/animations';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fintech' | 'climate' | 'digital'>('all');
  
  // Create ref for parallax effect
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  
  // Initialize parallax effect
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

  const projects = [
    {
      id: 'nobon',
      name: 'NOBON',
      category: 'climate',
      description: 'Digital platform facilitating carbon project financing and development.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stats: [
        { value: '€50M+', label: 'Green investments facilitated' },
        { value: '100+', label: 'Carbon projects funded' }
      ],
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: 'paytota',
      name: 'PayTota',
      category: 'fintech',
      description: 'Universal payment orchestration platform unifying online and mobile payments.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stats: [
        { value: '500+', label: 'EU merchants' },
        { value: '€10M+', label: 'Monthly transactions' }
      ],
      icon: <Wallet className="w-6 h-6" />
    },
    {
      id: 'paytack',
      name: 'Paytack',
      category: 'fintech',
      description: 'Multi-brand cashback platform leveraging Open Banking for seamless rewards.',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stats: [
        { value: '50K+', label: 'Active users' },
        { value: '200+', label: 'Partner brands' }
      ],
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'b2and',
      name: 'B2AND',
      category: 'digital',
      description: 'Cloud-based viral marketing platform transforming campaigns into growth engines.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stats: [
        { value: '2M+', label: 'Campaign reach' },
        { value: '300%', label: 'Average ROI' }
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'pricetify',
      name: 'Pricetify',
      category: 'digital',
      description: 'Price comparison and digital inventory management platform.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      stats: [
        { value: '1M+', label: 'Monthly users' },
        { value: '10K+', label: 'Merchants' }
      ],
      icon: <BarChart className="w-6 h-6" />
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16">
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
            src="/images/portfolio.png" 
            alt="Portfolio background" 
            className="w-full h-full object-cover object-center opacity-80"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <InteractiveBackground />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Portfolio<br />
            Companies
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Explore our diverse portfolio of innovative companies that are reshaping industries and driving sustainable growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/apply-founder"
              className="btn-primary inline-flex items-center px-8 py-3 rounded-full hover:bg-[#FF3D22] transition-colors"
            >
              Apply as Founder
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/apply-partner"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Apply as Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {[
              { id: 'all', label: 'All Projects', icon: <Globe className="w-5 h-5" /> },
              { id: 'fintech', label: 'Fintech', icon: <Wallet className="w-5 h-5" /> },
              { id: 'climate', label: 'Climate Tech', icon: <Leaf className="w-5 h-5" /> },
              { id: 'digital', label: 'Digital Solutions', icon: <Zap className="w-5 h-5" /> }
            ].map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`btn-primary flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#FF3D22] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/portfolio/${project.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-48">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                        {project.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22] transition-colors duration-200">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          {project.stats.map((stat, i) => (
                            <div key={i} className="flex items-center text-sm">
                              <span className="font-semibold text-[#FF3D22]">{stat.value}</span>
                              <span className="ml-2 text-gray-500">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#FF3D22] transform transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;