import React from "react";
import Img from "../../../../../assets/Image/image27.jpg";
import Footer from "../../../../Footer";

const Career: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header
        className="relative min-h-screen text-teal-50 text-center bg-center p-6 sm:p-10 md:px-20 lg:px-48 bg-fixed bg-cover flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Join the G3 Cyberspace Team
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4">
          Make an impact in the dynamic field of data privacy and compliance. We’re looking for talented, passionate individuals who are ready to solve challenges and grow with us.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Join Us */}
        <section>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-54 sm:mb-6 text-teal-800 animate-slidein">
            Why Join Us?
          </h2>
          <ul className="space-y-6">
            <li className="group relative bg-white shadow-md p-6 border-l-4 border-teal-800 overflow-hidden">
              <span className="absolute inset-0 bg-teal-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
              <span className="relative z-10 text-teal-800 group-hover:text-white transition-colors duration-500">
                <strong>Dynamic and Collaborative Culture:</strong> Thrive in an innovative environment that values teamwork and fresh ideas.
              </span>
            </li>
            <li className="group relative bg-white shadow-md p-6 border-l-4 border-teal-800 overflow-hidden">
              <span className="absolute inset-0 bg-teal-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
              <span className="relative z-10 text-teal-800 group-hover:text-white transition-colors duration-500">
                <strong>Career Growth Opportunities:</strong> Unlock your potential with continuous learning and professional development.
              </span>
            </li>
            <li className="group relative bg-white shadow-md p-6 border-l-4 border-teal-800 overflow-hidden">
              <span className="absolute inset-0 bg-teal-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
              <span className="relative z-10 text-teal-800 group-hover:text-white transition-colors duration-500">
                <strong>Pioneering Solutions:</strong> Be part of a team driving advancements in data privacy, cybersecurity, and compliance.
              </span>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Explore exciting opportunities and apply to take the next step in your career with G3 Cyberspace.
          </p>
          <a
            href="mailto:info@g3cyberspace.com"
            className="mt-4 inline-block bg-teal-800 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium shadow-md hover:bg-teal-500"
          >
            Email Your Resume
          </a>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Career;
