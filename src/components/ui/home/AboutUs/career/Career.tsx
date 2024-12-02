import React from "react";
import Footer from "../../../../Footer";

const Career: React.FC = () => {
  return (
    <div className="min-h-screen ">
       <header className="bg-gray-100 text-teal-800 mt-24 p-8 text-center">
        <h1 className="text-4xl font-bold">Join the G3 Cyberspace Team</h1>
        <p className="text-lg mt-4">
          Make an impact in the dynamic field of data privacy and compliance. We’re looking for talented, passionate individuals who are ready to solve challenges and grow with us.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Why Join Us */}
        <section>
          <h2 className="text-2xl font-bold text-teal-800 mb-6">Why Join Us?</h2>
          <ul className="space-y-6">
            <li className="bg-white shadow-md p-6 border-l-4 border-teal-800">
              <strong>Dynamic and Collaborative Culture:</strong> Thrive in an
              innovative environment that values teamwork and fresh ideas.
            </li>
            <li className="bg-white shadow-md p-6 border-l-4 border-teal-800">
              <strong>Career Growth Opportunities:</strong> Unlock your
              potential with continuous learning and professional development.
            </li>
            <li className="bg-white shadow-md p-6 border-l-4 border-teal-800">
              <strong>Pioneering Solutions:</strong> Be part of a team driving
              advancements in data privacy, cybersecurity, and compliance.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <p className="text-lg">
            Explore exciting opportunities and apply to take the next step in
            your career with G3 Cyberspace.
          </p>
          <a
            href="mailto:info@g3cyberspace.com"
            className="mt-4 inline-block bg-teal-800 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-teal-500"
          >
            Email Your Resume
          </a>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Career;
