import React from "react";
import Img from "../../../../../assets/Image/img20.jpg";

const HeadSection: React.FC = () => {
  return (
    <div
      className="flex item-center justify-center bg-fixed bg-cover"
      style={{backgroundImage: `url(${Img})`}}
    >
      <div className="bg-black w-full bg-opacity-55 h-full flex flex-col text-white py-44 px-56">
        <h1 className="text-6xl font-bold mb-4">CYBERSECURITY ASSESSMENT SERVICES</h1>
        <p className="text-3xl shadow-sm p-4 border-l-8 border-orange-600">
        Stay ahead of the curve with our comprehensive cybersecurity assessment solutions!
        </p>
        
      </div>
    </div>
  );
};

export default HeadSection;
