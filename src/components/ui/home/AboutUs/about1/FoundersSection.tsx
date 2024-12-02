import React from "react";

const founders = [
  {
    name: "Ashok Kumar J - Founder",
    description:
      "With over 18 years of experience in data privacy, compliance, and risk management, he has been at the forefront of helping organizations navigate complex regulatory landscapes across the Middle East, USA, and beyond. His vision for G3 Cyberspace is to provide innovative and practical solutions that enable businesses to thrive securely in an evolving digital environment.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Narasingh Sahu - Co-founder",
    description:
      "Narasingh Sahu brings a wealth of expertise in cybersecurity, technology implementation, and operational excellence. His focus lies in designing scalable, future-ready solutions that protect organizations from ever-evolving threats while driving efficiency and growth.",
    image: "https://via.placeholder.com/150",
  },
];

const FoundersSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <h2 className="text-2xl font-bold text-teal-800">About the Founders</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {founders.map((founder, index) => (
          <div key={index} className="flex-1 bg-white shadow-md p-6 rounded-lg">
            <img
              src={founder.image}
              alt={founder.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-800 text-center mb-2">
              {founder.name}
            </h3>
            <p className="text-sm">{founder.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;
