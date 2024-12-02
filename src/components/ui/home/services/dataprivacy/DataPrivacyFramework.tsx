import React from "react";
import Header from "./Header";
import ServiceCard from "./ServiceCard";
import Footer from "../../../../Footer";


const DataPrivacyFramework: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 px-32 p-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-teal-800 mb-6 ">
            Our Services
          </h2>
          <ServiceCard />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default DataPrivacyFramework;
