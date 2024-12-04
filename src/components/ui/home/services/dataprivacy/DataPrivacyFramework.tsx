import React from "react";
import Header from "./Header";
import Footer from "../../../../Footer";
import OurServices from "./OurServices";


const DataPrivacyFramework: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <OurServices />
      <Footer/>
    </div>
  );
};

export default DataPrivacyFramework;
