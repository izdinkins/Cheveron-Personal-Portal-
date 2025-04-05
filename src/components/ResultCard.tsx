
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import PercentageCircle from './PercentageCircle';

interface ResultCardProps {
  employeeName: string;
  percentage: number;
  items: string[];
  color: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ employeeName, percentage, items, color }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-xl w-full mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-gray-500 text-sm">Breakdown</div>
          <div className="font-bold text-lg">{employeeName}</div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-gray-500 text-sm">Project Concerns Report</div>
            <div className="font-semibold">MMDDYY</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">3D Digital Engineer</div>
            <div className="font-semibold">CSP</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">Electrical Project Engineer</div>
            <div className="font-semibold">FSRU</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">Software Engineer</div>
            <div className="font-semibold"></div>
          </div>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="mr-10">
          <PercentageCircle percentage={percentage} color={color} />
        </div>
        
        <div className="flex-1">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4">
                <Check size={16} color="white" />
              </div>
              <div className="text-gray-700">{item}</div>
            </div>
          ))}
        </div>
        
        <div className="ml-4">
          <ArrowRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
