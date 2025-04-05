
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '@/components/FileUploader';

const Upload: React.FC = () => {
  const navigate = useNavigate();

  const handleFileUpload = (file: File) => {
    // In a real app, you would process the CSV file here
    // For demo, we'll just navigate to the results page
    navigate('/results');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <FileUploader onFileUpload={handleFileUpload} />
    </div>
  );
};

export default Upload;
