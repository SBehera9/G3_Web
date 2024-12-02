import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Tailwind CSS Card</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card component styled with Tailwind CSS. It's a quick example to show the utility-first approach.
      </p>
      <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default Card;
