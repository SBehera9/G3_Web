import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Advisory Services",
    description: "Our cybersecurity assessment & advisory support offers actionable recommendations to enhance the value of your IT and security environment.",
  },
  {
    title: "SOC Assessment",
    description: "Our SOC Assessment optimizes your Security Operation Center by evaluating processes and technology to enhance threat detection and incident response.",
  },
  {
    title: "Vulnerability Assessment",
    description: "Our Vulnerability Assessment identifies and rectifies weaknesses in your network infrastructure, systems, and detailed evaluations.",
  },
  {
    title: "Third-Party Risk Management (TPRM)",
    description: "Our Third-Party Risk Management services evaluate vendor security practices, identify vulnerabilities, and ensure compliance to protect your supply chain.",
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto bg-gray-100 p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
