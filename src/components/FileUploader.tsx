import React, { useState } from 'react';
import { UploadIcon } from 'lucide-react';
import ChevronLogo from './ChevronLogo';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <ChevronLogo />
        </div>
        <h1 className="text-xl font-bold text-chevron-blue">The Personal Portal</h1>
        <p className="text-sm text-gray-500">Upload file here for analysis</p>
      </div>
      
      <div 
        className={`border-2 border-dashed ${isDragOver ? 'border-chevron-blue bg-blue-50' : 'border-gray-300'} rounded-md p-8 mb-6 text-center cursor-pointer`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input 
          type="file" 
          id="file-input" 
          className="hidden" 
          accept=".pdf"
          onChange={handleFileChange}
        />
        <div className="flex justify-center mb-3">
          <UploadIcon size={40} className="text-gray-400" />
        </div>
        <p className="text-sm text-gray-500 mb-1">
          {file ? file.name : 'Drag & Drop your PDF file here'}
        </p>
        <p className="text-xs text-gray-400">
          {!file && 'or click to browse'}
        </p>
      </div>
      
      <button
        className={`w-full py-2 rounded-md ${file ? 'bg-chevron-blue text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
        disabled={!file}
        onClick={handleUpload}
      >
        Upload
      </button>
      
      <div className="text-center mt-4 text-xs text-gray-400">
        © 2025 The Personal Portal. All rights reserved.
      </div>
    </div>
  );
};

export default FileUploader;