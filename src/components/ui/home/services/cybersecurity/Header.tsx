import React from "react";
import Img from "../../../../../assets/Image/img30.jpg";

const Header: React.FC = () => {
  return (
    <header
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-teal-50 bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
        Bridging the Gap Between Risk and Resilience
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 md:px-20 lg:px-40">
        In an era of increasing cyber threats and evolving compliance
        requirements, safeguarding your organization's digital assets is
        paramount. Our cybersecurity services are designed to provide a robust
        framework that identifies vulnerabilities, ensures compliance with
        regulations, and fortifies your defenses against potential threats.
      </p>
    </header>
  );
};

export default Header;
