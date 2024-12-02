import React from "react";
import Img from "../../../../../assets/Image/img20.jpg";
import { useNavigate } from "react-router-dom";


  
const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/contact-form"); // Adjust the route as per your routing setup
  };

  return (
    <div
      className="flex item-center justify-center bg-fixed bg-cover"
      style={{backgroundImage: `url(${Img})`}}
    >
      <div className="bg-black w-full bg-opacity-55 h-full flex flex-col items-center justify-center text-center text-white py-44">
        <h1 className="text-3xl font-bold mb-4">Privacy Assessments</h1>
        <p className="text-lg max-w-2xl">
          Our Suite of Data protection and Privacy assessments include compliance requirements with domestic, cross-border, and top obligations.
        </p>
        <button onClick={handleNavigateToForm}
            className="bg-teal-800 text-white px-6 py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 mt-10 font-bold">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
