import React from "react";
import img5 from "../../../../assets/Image/img5.jpg";
import img6 from "../../../../assets/Image/Img6.png";
import img7 from "../../../../assets/Image/Img7.png";
import img8 from "../../../../assets/Image/Img8.png";
import img9 from "../../../../assets/Image/img9.jpg";

// ComplianceCard Component
const ComplianceCard: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <div className="w-48 h-48 border-[#80a4a4] border-2 bg-[white] rounded-lg shadow-[5px_5px_5px_#80a4a4] p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col items-center justify-center animate-slidein">
      <img src={image} alt={title} className="w-24 h-24 object-contain mb-4 animate-slidein"/>
      <h3 className="text-lg font-semibold text-teal-800 animate-slidein">{title}</h3>
    </div>
  );
};


// Main Component
const CompliancePage: React.FC = () => {
  const complianceData = [
    { title: "ISO 27001", image: img5 },
    { title: "SOC 2", image: img6 },
    { title: "GDPR", image: img5 },
    { title: "HIPAA", image: img9 },
    { title: "PCI DSS", image: img7 },
    { title: "PCI DSS", image: img8 },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="px-6 py-12">
        <h1 className="text-7xl font-bold text-teal-800 text-center mb-16">Compliance Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full place-items-center">
          {complianceData.map((item) => (
            <ComplianceCard key={item.title} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
