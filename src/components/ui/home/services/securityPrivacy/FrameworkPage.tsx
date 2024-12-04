import React from 'react';
import Img from "../../../../../assets/Image/Gif3.gif";


const FrameworkPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="relative min-h-screen flex items-center justify-center text-teal-50 text-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight">
            Framework Implementation Services
          </h1>
          <p className="mt-4 text-lg">
            Seamless Implementation Services for Compliance and Security Frameworks
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-md hover:bg-green-600">
            View Services
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default FrameworkPage;
