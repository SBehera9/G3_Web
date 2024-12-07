import React from 'react';
import Img from "../../../../../assets/Image/img31.jpg";

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center text-teal-50 text-center bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}>
      <div className="container mx-auto px-6 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Privacy Regulations Compliance
        </h1>
      </div>
    </header>
  );
};

export default Header;
