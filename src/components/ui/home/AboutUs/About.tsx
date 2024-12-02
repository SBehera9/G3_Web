import React from 'react';
import Img from '../../../../assets/Image/img1.jpg';

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid md:grid-cols-2 w-10/12 gap-8 text-teal-800 py-32">
        {/* About Us Section */}
        <div className="border-[#80a4a4]  border-2 bg-[white] rounded-lg shadow-[5px_5px_5px_#80a4a4] p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center animate-slidein">
          <h2 className="text-5xl font-semibold mb-6 text-center">About Us</h2>
          <p className="text-lg leading-relaxed text-center animate-slidein">
            At G3 Cyberspace, we specialize in empowering businesses with comprehensive solutions in cybersecurity, data privacy, and regulatory compliance.
            With our expertise spanning consulting, assessments, and professional services, we help organizations confidently navigate the complex landscape of
            digital security and compliance standards.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img src={Img} alt="About Us" className="w-full rounded-lg shadow-lg animate-slidein" />
        </div>
      </div>
    </div>
  );
};

export default About;
