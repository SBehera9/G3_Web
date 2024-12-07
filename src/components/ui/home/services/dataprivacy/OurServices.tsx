import React from "react";
import './abc.css';

const services = [
  { title: "Privacy Readiness Assessment", content: "Discover gaps in your data privacy practices and gain a clear, actionable plan to address vulnerabilities and enhance compliance." },
  { title: "Custom Framework Development", content: "Build a privacy framework tailored to your business operations and industry standards, ensuring seamless integration and compliance." },
  { title: "Policy and Process Creation", content: "Develop and implement robust privacy policies, procedures, and controls customized to meet regulatory requirements effectively." },
  { title: "Data Lifecycle Management", content: "Securely manage personal data at every stage—collection, storage, sharing, and disposal—to ensure compliance and minimize risks." },
  { title: "Workforce Privacy Integration", content: "Empower your team with essential tools and training to embed privacy into your organizational culture and daily operations." },
  { title: "Third-Party Privacy Risk Management", content: "Assess and mitigate privacy risks associated with vendors and partners, ensuring third-party compliance aligns with your organizational standards." },
];

const OurServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8 md:mb-10">Our Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div key={index} className="group perspective w-full h-64">
            <div className="relative w-full h-full transform-style-preserve transition-transform duration-700 transform-gpu group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute inset-0 bg-teal-600 text-white shadow-lg rounded-lg flex items-center justify-center text-center p-4 sm:p-6 backface-hidden">
                <h2 className="text-lg sm:text-xl font-semibold">{service.title}</h2>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 bg-gray-100 shadow-lg rounded-lg flex items-center justify-center text-center p-4 sm:p-6 backface-hidden rotate-y-180">
                <p className="text-sm sm:text-base text-teal-900 font-bold">{service.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
