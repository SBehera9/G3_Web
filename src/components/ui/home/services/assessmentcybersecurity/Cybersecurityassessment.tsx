import React from "react";

import HeadSection from "./HeadSection";
import ServiceGrid from "./ServiceGrid";
import GetQuoteButton from "./GetQuoteButton";



const Cybersecurityassessment : React.FC = () => {
  return (
    <div className="font-sans text-gray-800 mt-24">
      <HeadSection />
      <ServiceGrid />
      <GetQuoteButton />
    </div>
  );
};

export default Cybersecurityassessment;
