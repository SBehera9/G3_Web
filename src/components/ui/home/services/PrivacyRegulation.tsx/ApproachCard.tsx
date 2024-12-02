import React from 'react';

interface ApproachCardProps {
  number: number;
  title: string;
  description: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6">
      <div className="text-gray-600 font-bold text-2xl mb-2">{number}</div>
      <h3 className="text-teal-800 font-bold mb-4">{title}</h3>
      <p className="text-teal-800">{description}</p>
    </div>
  );
};

export default ApproachCard;
