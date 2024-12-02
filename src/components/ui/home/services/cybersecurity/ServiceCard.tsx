import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  points: { title: string; description: string }[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, points }) => {
  return (
    <div className="bg-white shadow-md p-6 border-l-4 border-teal-800 mb-6 rounded">
      <h3 className="text-xl font-semibold text-teal-800 mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="space-y-4">
        {points.map((point, index) => (
          <div key={index} className="p-4 bg-gray-50 border-l-4 border-teal-800 shadow-sm">
            <strong>{point.title}:</strong> {point.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
