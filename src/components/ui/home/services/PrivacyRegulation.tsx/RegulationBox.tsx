import React from 'react';

interface RegulationBoxProps {
  title: string;
}

const RegulationBox: React.FC<RegulationBoxProps> = ({ title }) => {
  return (
    <div className="bg-teal-100 text-teal-900 border-l-4 border-teal-500 p-4 rounded-lg shadow-sm">
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default RegulationBox;
