import React from "react";
import Img from "../../../../../assets/Image/Gif3.gif";

const HeadSection: React.FC = () => {
  return (
    <div
      className="flex item-center justify-center bg-fixed bg-cover"
      style={{backgroundImage: `url(${Img})`}}
    >
      <div className="bg-[#00000014] w-full bg-opacity-55 h-full flex flex-col text-white py-44 px-56">
        <h1 className="text-6xl font-bold mb-4">Professional Services -<br/>vCISO & vDPO</h1>
        <p className="text-3xl shadow-sm p-4 border-l-8 border-orange-600">
        Expert  guidance For security & compliance
        </p>
        <div className="text-left py-6">
           <button className="bg-teal-600 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-lg">
             VIEW SERVICES
           </button>
        </div>
      </div> 
    </div>
  );
};

export default HeadSection;
