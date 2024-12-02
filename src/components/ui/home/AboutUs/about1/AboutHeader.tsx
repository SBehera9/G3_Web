import React from "react";
import Img from "../../../../../assets/Image/Gif1.gif";

const AboutHeader: React.FC = () => {
  return (
    <header className="grid md:grid-cols-2 gap-8 text-teal-800 p-10 mt-24">
      <div className="rounded-lg p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">About G3 Cyberspace</h1>
      <p className="text-lg">
        Your Partner in <strong>Governing Global Governance (G3)</strong>
      </p>
      </div>
      <div className="flex justify-center items-center">
          <img src={Img} alt="" className="w-full rounded-lg shadow-lg" />
        </div>
    </header>
  );
};

export default AboutHeader;
