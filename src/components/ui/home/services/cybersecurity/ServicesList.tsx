import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Gap Assessments: Your First Step to Cybersecurity Excellence",
    description: "Uncover hidden vulnerabilities and unlock your organization's true cybersecurity potential.",
    points: [
      {
        title: "Comprehensive Evaluation",
        description: "Assess systems, policies, and controls against global standards like ISO 27001, NIST CSF, and PCI DSS.",
      },
      {
        title: "Audit & Certification Readiness",
        description: "Prepare your organization to meet compliance requirements with customized solutions.",
      },
    ],
  },
  {
    title: "Cybersecurity Audits: Uncover, Validate, Secure",
    description: "Strengthen your defenses with a deep dive into your cybersecurity framework.",
    points: [
      {
        title: "Control Assessment",
        description: "Conduct an in-depth evaluation to uncover vulnerabilities and potential risks.",
      },
      {
        title: "Regulatory Compliance Review",
        description: "Ensure adherence to industry standards and best practices.",
      },
    ],
  },
  {
    title: "IS Regulations Compliance: Simplifying Complexity, Ensuring Confidence",
    description: "Achieve seamless compliance with ever-evolving Information Security (IS) regulations.",
    points: [
      {
        title: "Regulatory Mapping",
        description: "Align your operations with GDPR, HIPAA, and region-specific mandates across the Middle East, Europe, and the USA.",
      },
      {
        title: "Tailored Compliance Frameworks",
        description: "Develop customized strategies to meet global standards and local laws effectively.",
      },
    ],
  },
];

const ServicesList: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-teal-800 mb-6">Our Key Service Offerings</h2>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          points={service.points}
        />
      ))}
    </section>
  );
};

export default ServicesList;
