import React from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6 flex items-start">
      <div className="text-teal-800 text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-teal-800 font-bold text-lg">{title}</h3>
        <p className="text-teal-800 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
