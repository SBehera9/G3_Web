import React from 'react';
import Header from './Header';
import ProductHighlight from './ProductHighlight';
import FeatureCard from './FeatureCard';
import { FaShieldAlt, FaTasks, FaRegCheckCircle } from 'react-icons/fa';
import Footer from '../../../../Footer';

const SoltRisk: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Advanced Cybersecurity',
      description: 'Protect your business from cyber threats with state-of-the-art security tools.',
    },
    {
      icon: <FaTasks />,
      title: 'Streamlined Compliance',
      description: 'Automate regulatory adherence for ISO certifications and GDPR compliance.',
    },
    {
      icon: <FaRegCheckCircle />,
      title: 'Third-Party Risk Management',
      description: 'Assess and mitigate risks from third-party vendors effectively.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white mt-24">
      <Header />
      <main className="flex-1">
        <ProductHighlight />
        <section className="py-10 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-teal-800 font-bold text-2xl text-center mb-8">Core Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default SoltRisk;
