import React from "react";

const BusinessGrowthSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-teal-800 mb-6">
        Vision
      </h1>
      <h2 className="text-2xl font-bold text-teal-800 mb-6">
        Driving Business Growth Through Technology and Compliance
      </h2>
      <p className="mb-4">
        At G3 Cyberspace, we understand the challenges businesses face in managing data privacy, strengthening cybersecurity, and ensuring compliance with evolving regulations. Navigating these complexities can be overwhelming, even for organizations with dedicated teams.
      </p>
      <p className="mb-4">
        Our expertise and technology-driven solutions simplify these processes, empowering your business to:
      </p>
      <ul className="space-y-4">
        <li className="bg-white shadow-sm p-4 border-l-4 border-teal-800">
          <strong>Protect sensitive data:</strong> Advanced cybersecurity measures safeguard your information.
        </li>
        <li className="bg-white shadow-sm p-4 border-l-4 border-teal-800">
          <strong>Stay compliant:</strong> Ensure adherence to industry regulations and global standards.
        </li>
        <li className="bg-white shadow-sm p-4 border-l-4 border-teal-800">
          <strong>Reduce operational risks:</strong> Enhance trust with stakeholders and improve resilience.
        </li>
      </ul>
      <br/>
      <p className="mb-4">
        Partner with us to unlock growth opportunities by building a resilient, secure, and compliant organization ready to thrive in the digital age.
      </p>
    </section>
  );
};

export default BusinessGrowthSection;
