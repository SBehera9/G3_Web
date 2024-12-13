import React from "react";
import Header from "./Header";
import Footer from "../../../../../components/Footer";
import Excellence from "./Excellence";
import ContactForm from "../../contactus/Form/ContactForm";

const CybersecurityServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Excellence />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CybersecurityServicesPage;
