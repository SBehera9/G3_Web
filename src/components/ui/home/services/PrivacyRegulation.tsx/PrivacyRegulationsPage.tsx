import React from 'react';
import Header from './Header';
import RegulationBox from './RegulationBox';
import ApproachCard from './ApproachCard';
import Footer from '../../../../Footer';
import { motion } from 'framer-motion';

const PrivacyRegulationsPage: React.FC = () => {
  const regulations = [
    'General Data Protection Regulation',
    'California Consumer Protection Act',
    'Digital Personal Data Protection Act',
    'Health Insurance Portability & Accountability Act',
    'Singapore - Personal Data Protection Law',
    'Saudi Arabia - Personal Data Protection Law',
    'Qatar Financial Centre – Data Protection Regulations',
    'Dubai International Financial Centre – Data Protection Regulation',
  ];

  const approaches = [
    {
      number: 1,
      title: 'Gap Assessments',
      description: 'Identify compliance gaps and vulnerabilities to create a clear, actionable roadmap.',
    },
    {
      number: 2,
      title: 'Privacy Framework Development',
      description: 'Design tailored frameworks aligned with your industry, geography, and regulatory needs.',
    },
    {
      number: 3,
      title: 'Policy and Process Implementation',
      description: 'Develop and operationalize policies, notices, and controls to manage data securely.',
    },
    {
      number: 4,
      title: 'Operational Integration',
      description: 'Embed privacy practices into your daily workflows for sustainable compliance.',
    },
    {
      number: 5,
      title: 'Assessment & Support',
      description: 'Conduct a comprehensive review to validate compliance readiness.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 container mx-auto p-6">
        {/* Regulations Section */}
        <section className="mb-10 px-6 sm:px-16 md:px-24 lg:px-32">
          <h2 className="text-teal-800 font-bold text-2xl sm:text-3xl md:text-4xl mb-4">Data Protection Regulations</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5, // Stagger children with a delay
                },
              },
            }}
          >
            {regulations.map((regulation, index) => (
              <RegulationBox
                key={index}
                title={regulation}
              />
            ))}
          </motion.div>
        </section>

        {/* Approach Section */}
        <section className="px-6 sm:px-16 md:px-24 lg:px-32">
          <h2 className="text-teal-800 font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-4">Our Approach</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {approaches.map((approach) => (
              <ApproachCard
                key={approach.number}
                number={approach.number}
                title={approach.title}
                description={approach.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyRegulationsPage;
