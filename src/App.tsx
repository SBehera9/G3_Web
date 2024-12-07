import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Importing Navbar
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/ui/home/AboutUs/about1/AboutPage";
import Career from "./components/ui/home/AboutUs/career/Career";

import CybersecurityServicesPage from "./components/ui/home/services/cybersecurity/CybersecurityServicesPage";
import DataPrivacyFramework from "./components/ui/home/services/dataprivacy/DataPrivacyFramework";
import PrivacyRegulationsPage from "./components/ui/home/services/PrivacyRegulation.tsx/PrivacyRegulationsPage";

import PrivacyASS from "./components/ui/home/services/AssessmentsPrivacy/DataPrivacyPage";
import Cybersecurityassessment from "./components/ui/home/services/assessmentcybersecurity/Cybersecurityassessment";

import MainPage from "./components/ui/home/services/securityPrivacy/MainPage";

import SoltRisk from "./components/ui/home/hsection/OPsoltrisk/SoltRisk";

import Contact from "./components/ui/home/contactus/Form/Contact";
import ContactForm from "./components/ui/home/contactus/Form/ContactForm";
import PofessionalServices from "./components/ui/home/services/PofessionalServices/PofessionalServices";
import PrivacyPolicy from "./components/ui/home/privacypolicy/PrivacyPolicy";

// A component to conditionally render the Navbar
const ConditionalNavbar: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/contact-form"];

  return !hideNavbarPaths.includes(location.pathname) ? <Navbar /> : null;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Conditional Navbar */}
      <ConditionalNavbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/cyber-security" element={<CybersecurityServicesPage />} />
        <Route path="/implementation" element={<DataPrivacyFramework />} />
        <Route path="/privacyregulation" element={<PrivacyRegulationsPage />} />
        <Route path="/privacyass" element={<PrivacyASS />} />
        <Route path="/cybersecurityass" element={<Cybersecurityassessment />} />
        <Route path="/professional" element={<PofessionalServices />} />
        <Route path="/security-privacy" element={<MainPage />} />
        <Route path="/soltrisk" element={<SoltRisk />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
