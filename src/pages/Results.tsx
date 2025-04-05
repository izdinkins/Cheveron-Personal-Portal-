
import React, { useState } from 'react';
import ResultCard from '@/components/ResultCard';
import ChevronLogo from '@/components/ChevronLogo';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const employeeData = [
  {
    name: "Kam Boggs",
    percentage: 90,
    color: "#4CAF50",
    items: [
      "Problem-solving & critical thinking",
      "Staff Coordination",
      "Teamwork"
    ]
  },
  {
    name: "Kam Boggs 2",
    percentage: 85,
    color: "#4CAF50",
    items: [
      "Performance MAX/MPI/LVT",
      "Problem-solving & critical thinking",
      "Active S&D"
    ]
  },
  {
    name: "Kam Boggs 3",
    percentage: 73,
    color: "#FFEB3B",
    items: [
      "Design and Implementation",
      "Project management",
      "Technical Expertise"
    ]
  },
  {
    name: "Kam Boggs 4",
    percentage: 65,
    color: "#FFEB3B",
    items: [
      "ReactOps, Copy ?",
      "Leadership & staffing",
      "Operation & data maintenance"
    ]
  }
];

const Results: React.FC = () => {
  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  const currentEmployee = employeeData[currentEmployeeIndex];

  const handlePrevious = () => {
    setCurrentEmployeeIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentEmployeeIndex((prev) => (prev < employeeData.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <ChevronLogo />
            <h1 className="text-xl font-bold ml-2 text-chevron-blue">The Personal Portal</h1>
          </div>
          <div className="text-sm text-gray-500">
            Employee Analysis Results - {currentEmployeeIndex + 1} of {employeeData.length}
          </div>
        </div>
        
        <ResultCard 
          employeeName={currentEmployee.name}
          percentage={currentEmployee.percentage}
          items={currentEmployee.items}
          color={currentEmployee.color}
        />
        
        <div className="flex justify-between mt-8">
          <button 
            onClick={handlePrevious}
            disabled={currentEmployeeIndex === 0}
            className={`flex items-center ${currentEmployeeIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-chevron-blue'}`}
          >
            <ArrowLeft size={20} className="mr-1" />
            Previous
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentEmployeeIndex === employeeData.length - 1}
            className={`flex items-center ${currentEmployeeIndex === employeeData.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-chevron-blue'}`}
          >
            Next
            <ArrowRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
