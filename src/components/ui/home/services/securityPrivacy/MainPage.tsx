import React from "react";
import FrameworkPage from "./FrameworkPage";
import ExpertiseSection from "./ExpertiseSection";
import FrameworkServices from "./ServiceCard";
import Footer from "../../../../Footer";


const MainPage: React.FC = () => {
  return (
    <div>
      <FrameworkPage/>
      <ExpertiseSection/>
      <FrameworkServices/>
      <Footer />
    </div>
  );
};

export default MainPage;