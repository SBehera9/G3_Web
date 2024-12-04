import React from "react";
import Img from "../../../../../assets/Image/Gif3.gif";

const Header: React.FC = () => {
  return (
    <header 
      className="relative min-h-screen flex flex-col items-center justify-center text-teal-50 text-center bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <h1 className="text-4xl font-bold">Data Privacy Framework Implementation</h1>
      <p className="mt-4 text-lg">Protecting Data, Enabling Trust</p>
    </header>
  );
};

export default Header;
