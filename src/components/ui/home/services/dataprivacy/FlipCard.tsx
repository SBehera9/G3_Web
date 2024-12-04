import React from "react";

interface FlipCardProps {
  title: string;
  content: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, content }) => {
  return (
    <div className="group w-full md:w-1/3 p-4">
      {/* Card Container */}
      <div className="relative h-48 w-full bg-white shadow-lg rounded-lg transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-teal-800 text-white rounded-lg backface-hidden">
          <h3 className="text-lg font-bold text-center">{title}</h3>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-200 text-teal-800 rounded-lg transform rotate-y-180 backface-hidden">
          <p className="text-center">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
