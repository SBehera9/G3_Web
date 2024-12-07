import React from "react";

import Header from "./Header";
import ServiceCards from "./ServiceCards";
import ApproachSection from "./ApproachSection";
import Footer from "../../../../Footer";


const PrivacyASS: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <ServiceCards />
      <ApproachSection />
      <Footer />
    </div>
  );
};

export default PrivacyASS;
