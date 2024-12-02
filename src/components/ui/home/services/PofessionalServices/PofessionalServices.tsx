import React from "react";
import PsHeader from "./PsHeader";
import ExpertSl from "./ExpertSl";
import ESL from "./ESL";
import KfGrid from "./KfGrid";

import ContactForm from "../../contactus/Form/ContactForm";


const PofessionalServices : React.FC = () => {
  return (
    <div className="font-sans text-gray-800 mt-24">
     <PsHeader/>
     <ExpertSl/>
     <ESL/>
     <KfGrid/>
     <div className="w-full border-2 border-teal-950"></div>
     <ContactForm/>
     
    </div>
  );
};

export default PofessionalServices;
