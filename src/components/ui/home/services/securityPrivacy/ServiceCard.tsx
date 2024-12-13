import React from "react";
import img from "../../../../../assets/Image/im12.png";
import img1 from "../../../../../assets/Image/im13.png";
import img2 from "../../../../../assets/Image/im14.png";
import img3 from "../../../../../assets/Image/im15.png";
import img4 from "../../../../../assets/Image/im16.png";
import img5 from "../../../../../assets/Image/im17.png";import img6 from "../../../../../assets/Image/im18.png";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "ISO 27001 implementation",
    description: "Achieve robust information security management with ISO 27001.",
    imageUrl: img, 
  },  
  {
    title: "PCI DSS compliance",
    description: "Ensure your organization meets PCI DSS standards for payment security.",
    imageUrl: img1, 
  },
  {
    title: "SOC 2 implementation services",
    description: "Achieve compliance with SOC 2 standards effortlessly.",
    imageUrl: img2,
  },
  {
    title: "GDPR compliance",
    description: "Navigate the complexities of GDPR with expert guidance.",
    imageUrl: img3,
  },
  {
    title: "ISO 42001 implementation service",
    description: "Achieve compliance with ISO 42001 standards to enhance resilience.",
    imageUrl: img4,
  },
  {
    title: "HIPAA implementation",
    description: "Ensure compliance with HIPAA standards for healthcare organizations.",
    imageUrl: img5, 
  },
  {
    title: "ISO 9001 implementation",
    description: "Achieve quality management excellence with ISO 9001 services.",
    imageUrl: img6, 
  },
];

const FrameworkServices: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-base sm:text-lg lg:text-4xl text-teal-800 font-bold mb-8 text-center animate-slidein">
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
                  className="w-full h-full object-contain animate-slidein"
                />
              </div>
              {/* Content */}
              <div className="mt-4 text-center">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-teal-800 animate-slidein">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-teal-600 animate-slidein">
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
