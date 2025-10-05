import React from 'react';
import { Wallet, Zap, Users, Lock } from 'lucide-react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Paytack: React.FC = () => {
  return (
    <ProjectTemplate
      title="Paytack"
      description="A customer loyalty platform with a multi-brand cashback app that uses Open Banking to link accounts, track spending, and provide automatic rewards, enhancing consumer convenience and empowering businesses."
      category="Fintech"
      image="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      stats={[
        { value: '50K+', label: 'Active users' },
        { value: '200+', label: 'Partner brands' },
        { value: '15%', label: 'Avg. cashback' },
        { value: '€2M+', label: 'Rewards distributed' }
      ]}
      features={[
        {
          title: 'Open Banking Integration',
          description: 'Secure account linking and transaction tracking',
          icon: <Lock className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Automated Rewards',
          description: 'Instant cashback and loyalty points processing',
          icon: <Zap className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Multi-brand Platform',
          description: 'Single interface for multiple loyalty programs',
          icon: <Wallet className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Customer Insights',
          description: 'Advanced analytics and spending patterns',
          icon: <Users className="w-6 h-6 text-[#FF3D22]" />
        }
      ]}
      technologies={[
        'React Native',
        'Node.js',
        'MongoDB',
        'Open Banking APIs',
        'AWS',
        'GraphQL',
        'Firebase'
      ]}
      impact={[
        { metric: 'Active Users', value: '50K+' },
        { metric: 'Partner Brands', value: '200+' },
        { metric: 'Monthly Transactions', value: '100K+' },
        { metric: 'Average Cashback', value: '15%' },
        { metric: 'User Retention', value: '85%' },
        { metric: 'Partner Satisfaction', value: '4.8/5' }
      ]}
    />
  );
};

export default Paytack;
