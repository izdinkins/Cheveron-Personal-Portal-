import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import PercentageCircle from './PercentageCircle';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate(); // Hook to navigate

// const handleBackClick = () => {
//   navigate('/upload'); // Adjust the path to your upload page
// };
interface ResultCardProps {
  employeeName: string;
  percentage: number;
  items: string[];
  color: string;
  roles: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  
  employeeName, percentage, items, color,roles }) => {
    const navigate = useNavigate(); // Hook to navigate

const handleBackClick = () => {
  navigate('/upload'); // Adjust the path to your upload page
};
  return (
    <div className="bg-white rounded-md shadow-md p-6 max-w-xl w-full mx-auto">
      <div className="flex items-center justify-between mb-8 relative">
        {/* Name (left) */}
        <div>
          <div className="text-gray-500 text-sm">Name</div>
          <div className="font-bold text-lg">{employeeName}</div>
        </div>
  
        {/* Concerns (center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-gray-500 text-sm">Concerns</div>
          <div className="font-semibold">Low Experience</div>
        </div>
  
        {/* Role (right) */}
        <div className="text-right">
          <div className="text-gray-500 text-sm">Role</div>
          <div className="font-semibold">{roles}</div>
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
{/*         
        <div className="ml-4">
          <ArrowRight size={24} />
        </div> */}
        <div className='absolute bottom-6 right-6'>
          <button
          onClick={handleBackClick}
          className='flex items-center p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
            <ArrowLeft size={24}/>
          </button>

        </div>
      </div>
    </div>
  )
};

export default ResultCard;