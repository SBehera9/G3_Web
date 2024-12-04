import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Image/img4.png";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 px-20 py-11 bg-teal-900">
          <div className="">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-16 w-60 transform transition duration-300 hover:scale-105"
              />
            </Link>
            <div className="text-teal-50 text-2xl font-bold">Follow Us</div>
          </div>
         <div className="text-teal-50 text-2xl font-bold text-left lg:text-center">Know More
          <h1><Link to="/"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Home
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Startup Solutions
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Blog
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold  hover:text-teal-200"
           >
             Contact Us
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Privacy Policy
           </Link></h1>
         </div>
         <div className="text-teal-50 text-2xl font-bold text-left lg:text-center">Automations
         <h1><Link to="/"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Framework
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             TPRM
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Data Privacy
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Customer Centric Compliance (c3)
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             Statutory Compliance
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
            Risk Management
           </Link></h1>
         </div>
         <div className="text-teal-50 text-2xl font-bold text-left lg:text-center">Frameworks
         <h1><Link to="/"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             ISO 27001
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             ISO 27701
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             SOC 2
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             HIPAA
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             PCI-DSS
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             GDPR
           </Link></h1>
           <h1><Link to="//"
             className="text-teal-50 text-xl font-semibold hover:text-teal-200"
           >
             ISO 42001
           </Link></h1>
         </div>
         <div className="text-teal-50 text-2xl font-bold text-left lg:text-left">Reach Us
            <h1 className="font-semibold text-xl ">
              Address
              <p className="text-[17px]">Millenia Business Park, Phase two, Campus 3A, 2nd Floor, Dr M.G.R Main Road, Kandhanchavadi, Perungudi, 600096</p>
            </h1>
            <h1 className="font-semibold text-xl">
              Email us
              <p className="text-[17px]">sales@soltrisk-io</p>
            </h1>
         </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 G3 Cyberspace. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
