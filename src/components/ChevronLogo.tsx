
import React from 'react';

const ChevronLogo: React.FC = () => {
  return (
    <div className="w-14 h-14 flex items-center justify-center">
      <div className="w-12 h-12 bg-chevron-blue border-2 border-chevron-red relative flex flex-col justify-center items-center">
        <div className="w-full h-1 bg-chevron-red"></div>
        <div className="w-full h-1 bg-chevron-red mt-1"></div>
        <div className="w-full h-1 bg-chevron-red mt-1"></div>
      </div>
    </div>
  );
};

export default ChevronLogo;
