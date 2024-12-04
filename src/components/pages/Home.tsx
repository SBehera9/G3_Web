import React from "react";
import Img from "../../assets/Image/it.gif";
import About from "../ui/home/AboutUs/About";
import Services from "../ui/home/services/Services";
import CompliancePage from "../ui/home/Compliance/ComplianceCard";
import HeroSection from "../ui/home/hsection/HeroSection";
// import Contact from "../ui/home/contactus/Contact";
import Footer from "../Footer";



// import Drop from "../ui/v/drop";

const Home: React.FC = () => {
  return (
    <html lang="en" className="bg-white !scroll-smooth">
      <div
        className="relative min-h-screen items-center  text-teal-50 text-center bg-center flex item-center justify-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="">
          <h1 className="text-2xl md:text-6xl font-bold px-4 leading-relaxed">
            Empower your business to thrive securely in a
            <br />
            world of digital trust and robust cybersecurity
          </h1>
        </div>
      </div>

      <About/>
      <Services />
      <CompliancePage />
      <HeroSection />
      {/* <Contact /> */}
      {/* <Drop/> */}
      <Footer/>
      
    </html>
  );
};

export default Home;
