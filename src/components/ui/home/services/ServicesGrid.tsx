import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Consulting Services",
    description: "Cybersecurity & Data privacy",
  },
  {
    title: "Professional Services",
    description: "vCISO & vDPO",
  },
  {
    title: "VAPT",
    description: "Vulnerability & Penetration testing services",
  },
  {
    title: "Information Security Frameworks Implementation",
    description:
      "Implementation services for various global ISO standards & frameworks",
  },
  {
    title: "Data Privacy Regulations Compliance",
    description:
      "Roadmap, frameworks & consulting for compliance with global regulations",
  },
  {
    title: "Cybersecurity & Compliance Tools",
    description:
      "Flagship tool driven with AI to ease compliance with automation",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full max-w-6xl">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
