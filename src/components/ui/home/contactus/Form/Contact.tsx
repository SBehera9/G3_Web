import React from "react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/contact-form"); // Adjust the route as per your routing setup
  };

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Contact Us</h1>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Office</h2>
          <p>1234 Elm Street, Suite 567</p>
          <p>Cityville, State 12345</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>Phone: <a href="tel:+1234567890" className="text-teal-600 hover:underline">+1-234-567-890</a></p>
          <p>Email: <a href="mailto:info@company.com" className="text-teal-600 hover:underline">contact@example.com</a></p>
        </div>

        {/* Navigation to Contact Form */}
        <div className="text-center">
          <p className="text-lg font-medium mb-4">For futher information, Please fill the below form</p>
          <button
            onClick={handleNavigateToForm}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Fill This Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
