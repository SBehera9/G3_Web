import React from "react";
import FlipCard from "./FlipCard";

const services = [
  {
    title: "Privacy Readiness Assessment",
    content:
      "Discover gaps in your data privacy practices and gain a clear, actionable plan to address vulnerabilities and enhance compliance.",
  },
  {
    title: "Custom Framework Development",
    content:
      "Build a privacy framework tailored to your business operations and industry standards, ensuring seamless integration and compliance.",
  },
  {
    title: "Policy and Process Creation",
    content:
      "Develop and implement robust privacy policies, procedures, and controls customized to meet regulatory requirements effectively.",
  },
  {
    title: "Data Lifecycle Management",
    content:
      "Securely manage personal data at every stage—collection, storage, sharing, and disposal—to ensure compliance and minimize risks.",
  },
  {
    title: "Workforce Privacy Integration",
    content:
      "Empower your team with essential tools and training to embed privacy into your organizational culture and daily operations.",
  },
  {
    title: "Third-Party Privacy Risk Management",
    content:
      "Assess and mitigate privacy risks associated with vendors and partners, ensuring third-party compliance aligns with your organizational standards.",
  },
];

const ServiceCard: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {services.map((service, index) => (
        <FlipCard key={index} title={service.title} content={service.content} />
      ))}
    </div>
  );
};

export default ServiceCard;
