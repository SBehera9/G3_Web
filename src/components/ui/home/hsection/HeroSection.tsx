import React from "react";
import Img from "../../../../assets/Image/Gif2.gif";

const HeroSection: React.FC = () => {
  return (
    <div  className="relative min-h-screen items-center  text-teal-50 text-center bg-center flex item-center justify-center bg-fixed bg-cover"
    style={{ backgroundImage: `url(${Img})` }}>
      <div className="text-center max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-4 animate-slidein">
          Take the first step towards building a 
          <br/>secure, compliant, and trusted business.
        </h1>
        <p className="text-lg md:text-xl mb-6 mt-24 animate-slidein">
          Book your free consultation today!
        </p>
        {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow">
          Get Started
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
