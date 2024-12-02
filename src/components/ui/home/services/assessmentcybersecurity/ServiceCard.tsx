import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded p-7">
       <div className="bg-transparent rounded-lg">
           <h3 className="text-xl font-semibold  text-teal-900">{title}
           </h3>
       </div>
       <div className="border-2 rounded-lg p-4 mt-3">
           <p className="mt-2 text-teal-900">{description}</p>
       </div>
    </div>
  );
};

export default ServiceCard;
