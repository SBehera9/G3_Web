import React from "react";
import FrameworkPage from "./FrameworkPage";
import ExpertiseSection from "./ExpertiseSection";
import FrameworkServices from "./ServiceCard";


const MainPage: React.FC = () => {
  return (
    <div>
      <FrameworkPage/>
      <ExpertiseSection/>
      <FrameworkServices/>
    </div>
  );
};

export default MainPage;