import React from "react";

import HeadSection from "./HeadSection";
import ServiceGrid from "./ServiceGrid";
import GetQuoteButton from "./GetQuoteButton";
import Footer from "../../../../Footer";



const Cybersecurityassessment : React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <HeadSection />
      <ServiceGrid />
      <GetQuoteButton />
      <Footer />
    </div>
  );
};

export default Cybersecurityassessment;
