import React from 'react';
import { Leaf, Globe, LineChart, ArrowUpRight } from 'lucide-react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Nobon: React.FC = () => {
  return (
    <ProjectTemplate
      title="NOBON"
      description="NOBON is the platform which facilitated the entire Carbon project process focusing on financing. This digital platform provides various steps from design to investment which acts as catalyst between developer and investors."
      category="Climate Tech"
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      stats={[
        { value: '€50M+', label: 'Green investments facilitated' },
        { value: '100+', label: 'Carbon projects funded' },
        { value: '30%', label: 'Average ROI' },
        { value: '15+', label: 'Countries active' }
      ]}
      features={[
        {
          title: 'Project Lifecycle Management',
          description: 'End-to-end management of carbon projects from design to verification',
          icon: <LineChart className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Investment Platform',
          description: 'Direct connection between carbon project developers and investors',
          icon: <Globe className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Impact Tracking',
          description: 'Real-time monitoring and reporting of environmental impact',
          icon: <Leaf className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Market Integration',
          description: 'Seamless integration with global carbon markets',
          icon: <ArrowUpRight className="w-6 h-6 text-[#FF3D22]" />
        }
      ]}
      technologies={[
        'React',
        'Node.js',
        'PostgreSQL',
        'Blockchain',
        'AWS',
        'Machine Learning',
        'Smart Contracts'
      ]}
      impact={[
        { metric: 'Carbon Credits Generated', value: '1M+ tons' },
        { metric: 'Projects Funded', value: '100+' },
        { metric: 'Investment Facilitated', value: '€50M+' },
        { metric: 'Countries Impacted', value: '15+' },
        { metric: 'Success Rate', value: '92%' },
        { metric: 'Average Project ROI', value: '30%' }
      ]}
    />
  );
};

export default Nobon;
