import React from "react";

import Header from "./Header";
import ServiceCards from "./ServiceCards";
import ApproachSection from "./ApproachSection";


const PrivacyASS: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 mt-24">
      <Header />
      <ServiceCards />
      <ApproachSection />
    </div>
  );
};

export default PrivacyASS;
