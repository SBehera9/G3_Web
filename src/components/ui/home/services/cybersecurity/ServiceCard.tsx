import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  points: { title: string; description: string }[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, points }) => {
  return (
    <div className="bg-white shadow-md p-4 sm:p-6 border-l-4 border-teal-800 mb-6 rounded">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-800 mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg mb-4">{description}</p>

      <div className="space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="group relative p-3 sm:p-4 bg-gray-50 border-l-4 border-teal-800 shadow-sm overflow-hidden rounded-md"
          >
            {/* Sliding Background */}
            <span className="absolute inset-0 bg-teal-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>

            {/* Content */}
            <div className="relative z-10">
              <strong className="text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-500">
                {point.title}:
              </strong>{" "}
              <span className="text-sm sm:text-base lg:text-lg group-hover:text-white transition-colors duration-500">
                {point.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
