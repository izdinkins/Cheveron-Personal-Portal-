
import React, { useState,useEffect } from 'react';
import ResultCard from '@/components/ResultCard';
import ChevronLogo from '@/components/ChevronLogo';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { jsPDF } from 'jspdf';


// const employeeData = [
//   {
//     name: "Kam Boggs",
//     percentage: 90,
//     color: "#4CAF50",
//     items: [
//       "Problem-solving & critical thinking",
//       "Staff Coordination",
//       "Teamwork"
//     ]
//   },
//   {
//     name: "Kam Boggs 2",
//     percentage: 85,
//     color: "#4CAF50",
//     items: [
//       "Performance MAX/MPI/LVT",
//       "Problem-solving & critical thinking",
//       "Active S&D"
//     ]
//   },
//   {
//     name: "Kam Boggs 3",
//     percentage: 73,
//     color: "#FFEB3B",
//     summary: "Kam demonstrates strong problem-solving skills and effective staff coordination.",
//     items: [
//       "Design and Implementation",
//       "Project management",
//       "Technical Expertise"
//     ]
//   },
//   {
//     name: "Kam Boggs 4",
//     percentage: 65,
//     color: "#FFEB3B",
//     items: [
//       "ReactOps, Copy ?",
//       "Leadership & staffing",
//       "Operation & data maintenance"
//     ]
//   }
// ];

const Results: React.FC = () => {
  // const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  // const currentEmployee = employeeData[currentEmployeeIndex];
  const [employeeData,setEmployeeData] = useState<any[]>([]);
  const [currentEmployeeIndex,setCurrentEmployeeIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/employeeData.json');
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  const currentEmployee = employeeData[currentEmployeeIndex];

  const handlePrevious = () => {
    setCurrentEmployeeIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentEmployeeIndex((prev) => (prev < employeeData.length - 1 ? prev + 1 : prev));
  };

  if (employeeData.length === 0) {
    return <div>Loading...</div>;
  }
  //export feature 
  const exportToPDF = () => {
    const doc = new jsPDF();
    const linkUrl = 'https://drive.google.com/file/d/1O2CVuvC7I_71YnIJ-9kReyHEOPp7zfnt/view?usp=sharing'
    // const a = document.createElement('a')
    // a.href = linkUrl; 
    // a.download = "employee_result.pdf"
    // a.click();
    window.location.href = linkUrl;
    //
    // doc.text('Hello, World!', 10, 10);
    // doc.link(10,20,180,10,{url:linkUrl})
    // // Capture the result card content (using currentEmployee data)
    // const resultCardContent = document.getElementById('result-card-content');
    
    // if (resultCardContent) {
    //   doc.html(resultCardContent, {
    //     callback: () => {
    //       doc.save('employee_result.pdf'); // Save the generated PDF
    //     },
    //     margin: [10, 10],
    //     x: 10,
    //     y: 10,
    //   });
    // }

    // Open the link in a new tab
    // window.open(linkUrl, '_blank');
  };

  if (employeeData.length === 0) {
    return <div>Loading...</div>;
  }

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
        {/*export stuff for result card */}        
        <div id="result-card-content">
        <ResultCard 
          employeeName={currentEmployee.name}
          percentage={currentEmployee.percentage}
          items={currentEmployee.items}
          color={currentEmployee.color}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          disablePrevious={currentEmployeeIndex === 0}
          disableNext={currentEmployeeIndex === employeeData.length - 1}
          summary={currentEmployee.summary}
          roles ={currentEmployee.roles}
        />
        </div>
        {/*Summary Box */}
        {currentEmployee.summary && (
          <div className="mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-md">
            <h2 className="text-lg font-semibold text-yellow-800">Summary</h2>
            <p className="text-gray-700">{currentEmployee.summary}</p>
          </div>
        )}
        
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
 {/* Export Button */}
      <div className="mt-4">
          <button
            onClick={exportToPDF}
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            Export to PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default Results;
