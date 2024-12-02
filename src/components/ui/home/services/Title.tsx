import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="text-7xl font-bold mb-16 text-center text-teal-800">{text}</h1>
  );
};

export default Title;
