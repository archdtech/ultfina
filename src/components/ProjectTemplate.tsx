import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectTemplateProps {
  title: string;
  description: string;
  category: string;
  image: string;
  stats: Array<{ value: string; label: string }>;
  features: Array<{ title: string; description: string; icon: JSX.Element }>;
  technologies: string[];
  impact: Array<{ metric: string; value: string }>;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  title,
  description,
  category,
  image,
  stats,
  features,
  technologies,
  impact
}) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[70vh] flex items-center bg-black text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-[#FF3] rounded-full mb-4">
              {category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8">{description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-[#FF3D22] mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#FF3D2] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Technology Stack</h2>
          <div className="flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-800"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-800 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#FF3D2] mb-2">{item.value}</div>
                <div className="text-gray-400">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Scale Your Impact?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apply-founder"
              className="inline-flex items-center px-8 py-3 bg-white text-[#FF3] rounded-full hover:bg-gray-100 transition-colors"
            >
              Apply as Founder
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/apply-partner"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#FF3] transition-colors"
            >
              Apply as Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
