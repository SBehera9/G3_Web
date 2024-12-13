import React from "react";
import PsHeader from "./PsHeader";
import ExpertSl from "./ExpertSl";
import ESL from "./ESL";
import KfGrid from "./KfGrid";

import ContactForm from "../../contactus/Form/ContactForm";
import Footer from "../../../../Footer";


const PofessionalServices : React.FC = () => {
  return (
    <div className="font-sans ">
     <PsHeader/>
     <ExpertSl/>
     <ESL/>
     <KfGrid/>
     <div className="w-full border-2 border-teal-950"></div>
     <ContactForm/>
     <Footer />
     
    </div>
  );
};

export default PofessionalServices;
