import React from 'react';
import { Users, Zap, LineChart, Share2 } from 'lucide-react';
import ProjectTemplate from '../../components/ProjectTemplate';

const B2and: React.FC = () => {
  return (
    <ProjectTemplate
      title="B2AND"
      description="A result-oriented cloud-based platform that leverages viral marketing to transform campaigns into self-sustaining growth engines, enabling users to recommend campaigns to their networks for exponential reach and impact."
      category="Digital Solutions"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      stats={[
        { value: '2M+', label: 'Campaign reach' },
        { value: '300%', label: 'Average ROI' },
        { value: '5K+', label: 'Active campaigns' },
        { value: '10X', label: 'Viral coefficient' }
      ]}
      features={[
        {
          title: 'Viral Campaign Engine',
          description: 'AI-powered campaign optimization and viral loop creation',
          icon: <Share2 className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Performance Analytics',
          description: 'Real-time tracking and campaign performance metrics',
          icon: <LineChart className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Network Effect',
          description: 'Social sharing and referral management system',
          icon: <Users className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Instant Deployment',
          description: 'Quick campaign setup and launch capabilities',
          icon: <Zap className="w-6 h-6 text-[#FF3D22]" />
        }
      ]}
      technologies={[
        'React',
        'Python',
        'TensorFlow',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Kubernetes',
        'ElasticSearch'
      ]}
      impact={[
        { metric: 'Total Reach', value: '2M+' },
        { metric: 'Average ROI', value: '300%' },
        { metric: 'Active Campaigns', value: '5K+' },
        { metric: 'Viral Coefficient', value: '10X' },
        { metric: 'Client Growth', value: '150%' },
        { metric: 'Campaign Success Rate', value: '85%' }
      ]}
    />
  );
};

export default B2and;
