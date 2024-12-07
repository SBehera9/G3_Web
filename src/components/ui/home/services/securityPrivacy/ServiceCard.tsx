import React from "react";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "ISO 27001 implementation",
    description: "Achieve robust information security management with ISO 27001.",
    imageUrl: "path/to/iso-27001-logo.png", // Replace with actual image path
  },
  {
    title: "PCI DSS compliance",
    description: "Ensure your organization meets PCI DSS standards for payment security.",
    imageUrl: "path/to/pci-dss-logo.png", // Replace with actual image path
  },
  {
    title: "SOC 2 implementation services",
    description: "Achieve compliance with SOC 2 standards effortlessly.",
    imageUrl: "path/to/soc2-logo.png", // Replace with actual image path
  },
  {
    title: "GDPR compliance",
    description: "Navigate the complexities of GDPR with expert guidance.",
    imageUrl: "path/to/gdpr-logo.png", // Replace with actual image path
  },
  {
    title: "ISO 42001 implementation service",
    description: "Achieve compliance with ISO 42001 standards to enhance resilience.",
    imageUrl: "path/to/iso-42001-logo.png", // Replace with actual image path
  },
  {
    title: "HIPAA implementation",
    description: "Ensure compliance with HIPAA standards for healthcare organizations.",
    imageUrl: "path/to/hipaa-logo.png", // Replace with actual image path
  },
  {
    title: "ISO 9001 implementation",
    description: "Achieve quality management excellence with ISO 9001 services.",
    imageUrl: "path/to/iso-9001-logo.png", // Replace with actual image path
  },
];

const FrameworkServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-base sm:text-lg lg:text-xl text-green-600 font-semibold uppercase mb-8 text-center">
          Our Framework Implementation Services
        </h2>
        {/* Service List */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Content */}
              <div className="mt-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
                  {service.description}
                </p>
                {/* <button className="mt-4 px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white bg-teal-900 rounded hover:bg-green-700">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FrameworkServices;
