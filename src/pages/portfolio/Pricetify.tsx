import React from 'react';
import { BarChart, ShoppingCart, Globe, Zap } from 'lucide-react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Pricetify: React.FC = () => {
  return (
    <ProjectTemplate
      title="Pricetify"
      description="A comprehensive price comparison platform that helps users find the best deals while providing offline merchants with digital inventory and order management tools to participate in the growing digital commerce ecosystem."
      category="Digital Solutions"
      image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      stats={[
        { value: '1M+', label: 'Monthly users' },
        { value: '10K+', label: 'Merchants' },
        { value: '500K+', label: 'Products listed' },
        { value: '25%', label: 'Avg. savings' }
      ]}
      features={[
        {
          title: 'Price Comparison Engine',
          description: 'Advanced algorithms for real-time price matching and comparison',
          icon: <BarChart className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Inventory Management',
          description: 'Digital tools for offline merchants to manage stock and orders',
          icon: <ShoppingCart className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Market Integration',
          description: 'Seamless connection to major e-commerce platforms',
          icon: <Globe className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Real-time Updates',
          description: 'Instant price and inventory synchronization',
          icon: <Zap className="w-6 h-6 text-[#FF3D22]" />
        }
      ]}
      technologies={[
        'Vue.js',
        'Python',
        'Django',
        'PostgreSQL',
        'Elasticsearch',
        'Redis',
        'Docker',
        'GCP'
      ]}
      impact={[
        { metric: 'Active Users', value: '1M+' },
        { metric: 'Registered Merchants', value: '10K+' },
        { metric: 'Products Listed', value: '500K+' },
        { metric: 'Average User Savings', value: '25%' },
        { metric: 'Merchant Revenue Growth', value: '40%' },
        { metric: 'Platform Reliability', value: '99.9%' }
      ]}
    />
  );
};

export default Pricetify;
