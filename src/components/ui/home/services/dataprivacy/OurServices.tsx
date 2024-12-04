import React from "react";
import './abc.css';

const OurServices: React.FC = () => {
  const services = [
    { title: "Privacy Readiness Assessment", description: "Discover gaps in your data privacy practices and gain a clear, actionable plan to address vulnerabilities and enhance compliance." },
    { title: "Custom Framework Development", description: "Build a privacy framework tailored to your business operations and industry standards, ensuring seamless integration and compliance." },
    { title: "Policy and Process Creation", description: "Develop and implement robust privacy policies, procedures, and controls customized to meet regulatory requirements effectively." },
    { title: "Data Lifecycle Management", description: "Securely manage personal data at every stage—collection, storage, sharing, and disposal—to ensure compliance and minimize risks." },
    { title: "Workforce Privacy Integration", description: "Empower your team with essential tools and training to embed privacy into your organizational culture and daily operations." },
    { title: "Third-Party Privacy Risk Management", description: "Assess and mitigate privacy risks associated with vendors and partners, ensuring third-party compliance aligns with your organizational standards." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-teal-900 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, index) => (
          <div key={index} className="group perspective w-full h-64">
            <div className="relative w-full h-full transform-style-preserve transition-transform duration-700 transform-gpu group-hover:rotate-y-180">
              {/* Front Side with Green Background */}
              <div className="absolute inset-0 bg-teal-600 text-white shadow-lg rounded-lg flex items-center justify-center text-center p-8 backface-hidden">
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 bg-gray-100 shadow-lg rounded-lg flex items-center justify-center text-center p-8 backface-hidden rotate-y-180">
                <p className="text-teal-900 font-bold">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
