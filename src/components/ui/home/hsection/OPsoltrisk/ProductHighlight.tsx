import React from 'react';

const ProductHighlight: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-teal-800 font-bold text-2xl mb-4">Why Choose SoltRisk?</h2>
        <p className="text-teal-800 text-lg max-w-3xl mx-auto">
          SoltRisk is an advanced compliance and cybersecurity platform designed to streamline regulatory adherence and risk management. It empowers businesses with automated solutions for ISO certifications, GDPR compliance, and third-party risk assessments.
        </p>
      </div>
    </section>
  );
};

export default ProductHighlight;
