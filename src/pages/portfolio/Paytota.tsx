import React from 'react';
import { Wallet, Globe, Zap, Shield } from 'lucide-react';
import ProjectTemplate from '../../components/ProjectTemplate';

const Paytota: React.FC = () => {
  return (
    <ProjectTemplate
      title="PayTota"
      description="Paytota is a cloud-based universal payment orchestration platform that unifies online and mobile payments enabling businesses to streamline transactions and expand customer reach."
      category="Fintech"
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      stats={[
        { value: '500+', label: 'EU merchants' },
        { value: '€10M+', label: 'Monthly transactions' },
        { value: '99.9%', label: 'Uptime' },
        { value: '25+', label: 'Payment methods' }
      ]}
      features={[
        {
          title: 'Payment Orchestration',
          description: 'Unified platform for managing multiple payment providers and methods',
          icon: <Wallet className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Global Coverage',
          description: 'Support for international payments and multiple currencies',
          icon: <Globe className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Real-time Processing',
          description: 'Instant transaction processing and settlement',
          icon: <Zap className="w-6 h-6 text-[#FF3D22]" />
        },
        {
          title: 'Advanced Security',
          description: 'PCI DSS compliant with fraud prevention',
          icon: <Shield className="w-6 h-6 text-[#FF3D22]" />
        }
      ]}
      technologies={[
        'Microservices',
        'Kubernetes',
        'Go',
        'PostgreSQL',
        'Redis',
        'RabbitMQ',
        'AWS',
        'Docker'
      ]}
      impact={[
        { metric: 'Transaction Volume', value: '€10M+/month' },
        { metric: 'Active Merchants', value: '500+' },
        { metric: 'Payment Methods', value: '25+' },
        { metric: 'Countries Served', value: '30+' },
        { metric: 'Transaction Success Rate', value: '99.9%' },
        { metric: 'Average Response Time', value: '<100ms' }
      ]}
    />
  );
};

export default Paytota;
