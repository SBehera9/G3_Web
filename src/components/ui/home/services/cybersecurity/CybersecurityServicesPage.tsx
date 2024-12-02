import React from "react";
import Header from "./Header";
import ServicesList from "./ServicesList";
import Footer from "../../../../../components/Footer";

const CybersecurityServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <ServicesList />
      </main>
      <Footer />
    </div>
  );
};

export default CybersecurityServicesPage;
