import React, { useEffect } from "react";
import Img from "../../../../../assets/Image/Image46.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ComplianceSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 lg:px-32 bg-white py-12">
      {/* Left Image Section */}
      <div
        className="flex-1"
        data-aos="fade-right" // Animation for the image on scroll
      >
        <img
          src={Img}
          alt="Privacy Compliance"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content Section */}
      <div
        className="flex-1 text-center md:text-left"
        data-aos="fade-left" // Animation for the text on scroll
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Empowering Businesses with Comprehensive Privacy Compliance Solutions
        </h3>
        <p className="text-teal-600 text-sm sm:text-base leading-6">
          With increasingly stringent privacy laws and heightened consumer
          expectations, compliance with global and regional data protection
          regulations has become essential for businesses. Our Privacy
          Regulations Compliance services help your organization meet legal
          requirements while promoting a culture of trust, accountability, and
          transparency.
        </p>
      </div>
    </section>
  );
};

export default ComplianceSection;
