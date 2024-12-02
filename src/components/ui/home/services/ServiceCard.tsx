import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="border-[#80a4a4] border-2 bg-[white] rounded-lg shadow-[5px_5px_5px_#80a4a4] transform transition duration-300 hover:scale-105 hover:shadow-2xl justify-center text-center items-center p-5 animate-slidein">
      <h2 className="text-3xl font-semibold mb-4 animate-slidein">{title}</h2>
      <p className="text-teal-800 text-[20px] animate-slidein">{description}</p>
    </div>
  );
};

export default ServiceCard;
