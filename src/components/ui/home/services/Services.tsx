import React from "react";
import Title from "./Title";
import ServicesGrid from "./ServicesGrid";



const Services: React.FC = () => {
  return (
    <section className= "text-teal-800 min-h-screen flex flex-col items-center py-10 px-5">
      <Title text="What do we offer"/>
      <ServicesGrid/> 
    </section>
  );
};

export default Services;
