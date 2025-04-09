
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronLogo from '@/components/ChevronLogo';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, any login will work
    navigate('/upload');
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full flex">
        {/* Left side with login form */}
        <div className="w-1/2 flex justify-center items-center">
          <div className="max-w-md w-full px-8">
            <div className="flex justify-center mb-6">
              <ChevronLogo />
            </div>
            <h1 className="text-lg font-semibold text-center mb-4 text-chevron-blue">Welcome to Chevron</h1>            
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-chevron-blue"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-chevron-blue"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-chevron-blue text-white rounded-full py-2 hover:bg-blue-900 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        
        {/* Right side with image */}
        <div className="w-1/2">
          {/* <div className="h-full chevron-gradient flex items-center justify-center p-12">
            <div className="text-white max-w-lg">
              <h2 className="text-3xl font-bold mb-4">Employee Analysis System</h2>
              <p className="mb-6">
                Upload CSV files and get AI-powered insights about your team's performance and skills.
              </p>
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div> */}
           <img 
           src = "chevronLoginPic.jpg"
           alt="Chevron Login"
           className="w-full h-screen object-cover"
           />
        </div>
      </div>
    </div>
  );
};

export default Login;
